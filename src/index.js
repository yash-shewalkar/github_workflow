function add(a, b) {
    return a + b;
  }
  
function divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new TypeError('Both arguments must be numbers');
    }
    return a / b;
}
  module.exports = { add, divide };
  