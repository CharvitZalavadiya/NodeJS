const eventEmitter = require("node:events");

class pizzaShop extends eventEmitter {
  constructor() {
    super();
    this.orderNumber = 0;
}

order(size, type) {
    this.orderNumber++;
    this.emit("order", size, type);
    console.log(`~~~~~~~~~~~~~~~~~~Current order : ${this.orderNumber}`);
  }
}

module.exports = pizzaShop;