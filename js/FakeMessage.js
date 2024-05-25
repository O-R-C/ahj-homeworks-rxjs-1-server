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
    this.received = moment(Date.now()).format('HH:mm DD.MM.YYYY')
  }

  #createFullName() {
    const gender = this.#getGender()
    return `${faker.person.firstName(gender)} ${faker.person.lastName(gender)}`
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
