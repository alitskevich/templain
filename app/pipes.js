import { pipes } from 'ultimus'
const LEVELS = [
  { id: 0, name: 'ниже нормы' },
  { id: 1, name: 'нормa' },
  { id: 2, name: 'выше нормы' }
]
export default {
  ...pipes,
  fio: (p = {}) => p.name || p.fullName,
  bool: (x) => !!x,
  now: () => Date.now(),
  orNow: (d = Date.now()) => d,
  date: (d) => Date.format(d, 'dd mmmm yyyy'),
  dot: (x, k) => x ? x[k] : null,
  inc: (x = 0) => x + 1,
  cycledInc: (x = 0, max = 1, min = 0) => x >= max - 1 ? min : x + 1,
  inRange: (v, min = 0, max = 1) => (v >= min && v <= max ? 1 : 0),
  kv: (x = '', e = '') => 't' + e + x,
  age: (x, d = Date.narrow(x), y = d ? Date.now() / (356 * 24 * 3600000) + 1970 - d.getFullYear() : 0) => y ? Math.floor(y) : '???',
  wrapWithKey: (v, k, r) => ({ ...r, [k]: v }),
  findName: (v, data = [], def) => v != null ? (data.find(e => e.id === v) || {}).name || def || v : '???',
  norma: (v, min = 0, max = 1, data = LEVELS) => !v ? '' : (data[v < min ? 0 : (v > max ? 2 : 1)] || { name: '???' }).name,

  getDoPrint: () => () => window.print()
}
