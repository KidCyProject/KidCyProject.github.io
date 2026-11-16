import { beforeEach, describe, expect, it, vi } from 'vitest'

/**
 * The progress store runs in the browser. Here `window` is a small stand-in with a
 * localStorage that can be switched off, to cover private windows / blocked storage.
 */
const makeWindow = (working = true) => {
  const data = new Map<string, string>()
  return {
    data,
    dispatchEvent: vi.fn(() => true),
    localStorage: {
      getItem: (key: string) => {
        if (!working) throw new Error('blocked')
        return data.get(key) ?? null
      },
      setItem: (key: string, value: string) => {
        if (!working) throw new Error('blocked')
        data.set(key, value)
      },
      removeItem: (key: string) => {
        if (!working) throw new Error('blocked')
        data.delete(key)
      },
    },
  }
}

const load = async (fakeWindow: ReturnType<typeof makeWindow>) => {
  vi.resetModules()
  vi.stubGlobal('window', fakeWindow)
  return import('../src/utils/challengeProgress')
}

beforeEach(() => vi.unstubAllGlobals())

describe('challenge progress store', () => {
  it('saves a result and reads it back', async () => {
    const fake = makeWindow()
    const store = await load(fake)
    const record = store.recordResult('mw', 28, 35)
    expect(record).toMatchObject({ best: 80, points: 28, max: 35, plays: 1 })
    expect(store.readProgress().records.mw).toEqual(record)
    expect(store.completedCount(store.readProgress())).toBe(1)
    expect(fake.dispatchEvent).toHaveBeenCalledOnce()
  })

  it('keeps the best score and counts every play', async () => {
    const store = await load(makeWindow())
    store.recordResult('se', 10, 12)
    const worse = store.recordResult('se', 3, 12)
    expect(worse).toMatchObject({ best: 83, points: 10, plays: 2 })
    const better = store.recordResult('se', 12, 12)
    expect(better).toMatchObject({ best: 100, points: 12, plays: 3 })
  })

  it('never stores more than 100 % or less than 0 %', async () => {
    const store = await load(makeWindow())
    expect(store.recordResult('dc', 99, 16).best).toBe(100)
    expect(store.recordResult('dp', -5, 21).best).toBe(0)
    expect(store.recordResult('ap', 3, 0).best).toBe(0)
  })

  it('stores nothing but the results (no name, no personal data)', async () => {
    const fake = makeWindow()
    const store = await load(fake)
    store.recordResult('at', 1, 1)
    expect([...fake.data.keys()]).toEqual([store.STORAGE_KEY])
    const saved = JSON.parse(fake.data.get(store.STORAGE_KEY)!)
    expect(Object.keys(saved).sort()).toEqual(['records', 'v'])
    expect(Object.keys(saved.records.at).sort()).toEqual(['best', 'first', 'last', 'max', 'plays', 'points'])
  })

  it('ignores damaged or foreign data', async () => {
    const fake = makeWindow()
    const store = await load(fake)
    fake.data.set(store.STORAGE_KEY, '{not json')
    expect(store.readProgress().records).toEqual({})
    fake.data.set(store.STORAGE_KEY, JSON.stringify({ v: 1, records: { mw: { best: 'x' }, hacked: { best: 100 } } }))
    expect(store.readProgress().records).toEqual({})
  })

  it('still works for the current visit when storage is blocked', async () => {
    const store = await load(makeWindow(false))
    expect(store.canStoreProgress()).toBe(false)
    store.recordResult('dm', 5, 10)
    expect(store.readProgress().records.dm?.best).toBe(50)
  })

  it('clears everything', async () => {
    const fake = makeWindow()
    const store = await load(fake)
    store.recordResult('mw', 1, 2)
    store.clearProgress()
    expect(store.readProgress().records).toEqual({})
  })

  it('gives stars by percent', async () => {
    const store = await load(makeWindow())
    expect([0, 59, 60, 84, 85, 100].map(store.starsFor)).toEqual([1, 1, 2, 2, 3, 3])
  })
})
