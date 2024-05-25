const ArrayStorage = require('./ArrayStorage')
const FakeMessage = require('./FakeMessage')

class Messages extends ArrayStorage {
  #timer = null

  constructor() {
    super()

    this.#init()
  }

  #init() {
    this.#timer && clearInterval(this.#timer)

    this.#generateMessages()
    this.#timer = setInterval(this.#generateMessages, 5000)
  }

  #generateMessages = () => {
    this.clear()
    this.#addMessages(this.#getRandom())
  }

  #addMessages(count) {
    for (let i = 0; i <= count; i++) {
      this.push(new FakeMessage())
    }
  }

  #getRandom() {
    return Math.floor(Math.random() * 10)
  }
}

module.exports = Messages
