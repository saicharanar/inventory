class Inventory {
  #list;
  constructor(list) {
    this.#list = list;
  }

  listItems() {
    return this.#list;
  }

  equals(otherInventory) {
    return (
      otherInventory instanceof Inventory &&
      otherInventory.#list.every((item, index) => {
        return item === this.#list[index];
      })
    );
  }
}

exports.Inventory = Inventory;
