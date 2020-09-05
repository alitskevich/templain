import { Service } from './Service'

export class NavigationService extends Service {
  init () {
    const hash = window.location.hash.slice(1)
    if (hash[0] === '/') {
      this.emit('this.go', { value: hash.slice(1) })
    }
    window.location.hash = ''
  }

  getState () {
    return window.history.state
  }

  onGo ({ value }) {
    const { target, path = ['*'], params } = Object.urlParse(value)
    const state = {
      target: target,
      path,
      params: params.reset ? { ...params, reset: null } : { ...this.params, ...params }
    }
    window.history.pushState(state, '', '/' + Object.urlStringify(state))
    return state
  }
}
