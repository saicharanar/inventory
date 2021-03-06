const { Inventory } = require('../src/inventory');
const assert = require('assert');

describe('inventory', () => {
  it('Should validate the given object is an instance of Inventory', () => {
    const i1 = new Inventory(['a', 'b']);
    const i2 = new Inventory(['a', 'b']);
    assert.ok(i1.equals(i2));
  });

  it('Should list the items in the inventory', () => {
    const inventory = new Inventory(['a', 'b']);
    const expected = ['a', 'b'];
    assert.deepStrictEqual(inventory.listItems(), expected);
  });
});
