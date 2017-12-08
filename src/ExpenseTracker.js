function ExpenseTracker() {
    this.items = [];
}

ExpenseTracker.prototype.addItem = function (item) {
    return this.items.push(item);
};

ExpenseTracker.prototype.totalPrice = function () {
  var sum = 0;
  for (var i = 0; i < this.items.length; i++) {
      sum += this.items[i].price;
  }
  return sum;
};