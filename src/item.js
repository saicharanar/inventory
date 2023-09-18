class Item {
  #item;
  #price;
  #quantity;
  constructor(item, price, quantity) {
    this.#item = item;
    this.#price = price;
    this.#quantity = quantity;
  }

  equals(otherItem) {
    return (
      otherItem instanceof Item &&
      this.#item === otherItem.#item &&
      this.#price === otherItem.#price &&
      this.#quantity === otherItem.#quantity
    );
  }

}

exports.Item = Item;
