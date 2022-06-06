class Item {
  #item;
  constructor(item) {
    this.#item = item;
  }

  equals(otherItem) {
    return otherItem instanceof Item && this.#item === otherItem.#item;
  }
}

exports.Item = Item;
