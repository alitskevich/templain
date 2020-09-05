import { launch } from 'arrmatura'
import components from './components'
import templates from './app.html'
import pages from './pages'
import resources from './res'
import pipes from './pipes.js'

import * as services from './services'

const types = [
  ...components,
  ...Object.values(services),
  templates,
  ...pages
]

launch({
  template: '<App2 />',
  types,
  resources,
  pipes
})
