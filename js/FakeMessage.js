const moment = require('moment')
const { v4: uuidv4 } = require('uuid')
const { faker } = require('@faker-js/faker')

class FakeMessage {
  constructor() {
    this.fullName = this.#createFullName()

    this.id = uuidv4()
    this.from = this.#createEmailAddress()
    this.subject = this.#createSubject()
    this.body = faker.lorem.sentence()
    this.received = moment(faker.date.past()).format('HH:mm DD.MM.YYYY')
  }

  #createFullName() {
    return faker.person.fullName({
      sex: this.#getGender(),
    })
  }

  #getGender() {
    return faker.helpers.arrayElement(['male', 'female'])
  }

  #createEmailAddress() {
    const words = this.fullName.split(' ')
    return `${words[0].toLowerCase()}@${words[1].toLowerCase()}`
  }

  #createSubject() {
    return `Hello from ${this.fullName}!`
  }
}

module.exports = FakeMessage
