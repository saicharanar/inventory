const { Item } = require('../src/item');
const assert = require('assert');

describe('Item', () => {
  it('Should validate the given object is an Item', () => {
    const i1 = new Item('book', 100, 1);
    const i2 = new Item('book', 100, 1);
    assert.ok(i1.equals(i2));
  });
});
