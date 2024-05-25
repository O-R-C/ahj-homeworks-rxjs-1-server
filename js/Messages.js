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

    this.#generateMessage()
    this.#timer = setInterval(this.#generateMessage, 5000)
  }

  #generateMessage = () => {
    this.length > 10 && this.clear()
    this.#addMessage()
  }

  #addMessage() {
    this.push(new FakeMessage())
  }
}

module.exports = Messages
