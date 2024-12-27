export class Genre {
  #text;
  #value;

  constructor(text, value) {
    this.#text = text;
    this.#value = value;
  }

  get text() {
    return this.#text;
  }

  get value() {
    return this.#value;
  }

  set text(text) {
    this.#text = text;
  }

  set value(value) {
    this.#value = value;
  }
}
