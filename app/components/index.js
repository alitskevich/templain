import * as effectsTypes from './effects.js'

import elements from './elements.html'
import commons from './commons.html'
import table from './table.html'
import inputs from './inputs.html'
import fields from './fields.html'
import layouts from './layouts.html'
import viewport from './viewport.html'
import * as formTypes from './Form'

export default [
  ServiceWorker,
  ...Object.values(effectsTypes),
  ...Object.values(formTypes),
  elements, commons, table, fields, viewport, layouts, inputs
]
