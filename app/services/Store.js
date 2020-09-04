export class Store {
  init () {
    const env = {
      doctor: {
        fullName: 'И.А. Жуковская'
      },
      patient: {
        fullName: 'И.А. Жук',
        gender: 'm',
        birthdate: '1974-10-09'
      }
    }
    console.log('init', { ...this })
    const data = {
      ...env,
      ...this.initials
    }
    return {
      data
    }
  }

  onChange ({ value, key }, { data }) {
    console.log('onChange', value, key)
    return {
      data: {
        ...data,
        [key]: value
      }
    }
  }
}
