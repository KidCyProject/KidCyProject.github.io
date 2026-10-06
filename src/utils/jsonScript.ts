/**
 * Serialises data for an inline `<script type="application/json">` block
 * (rendered with `set:html`, which Astro does not escape).
 *
 * `JSON.stringify` alone is not safe there: a string containing `</script>`
 * or `<!--` — e.g. in a translation — would end the element early and let the
 * rest be parsed as HTML. Escaping `<`, `>` and `&` as `\u` sequences keeps the
 * payload valid JSON (`JSON.parse` turns them back into the same characters)
 * while making it impossible to break out of the element.
 */
export const toJsonScript = (data: unknown): string =>
  (JSON.stringify(data) ?? 'null')
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
