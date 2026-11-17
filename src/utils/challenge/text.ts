/** Fills `{name}` placeholders of a translated template: fmt('{n} of {total}', { n: 3, total: 7 }) → "3 of 7". */
export const fmt = (template: string | null | undefined, vars: Record<string, string | number> = {}): string =>
  String(template ?? '').replace(/\{(\w+)\}/g, (_match, key) => String(vars[key] ?? ''))
