class Calculator {
  static add(a, b) {
    return a + b;
  }
  static sub(a, b) {
    return a - b;
  }
  static mul(a, b) {
    return a * b;
  }
  static div(a, b) {
    return a / b;
  }
  static mod(a, b) {
    return a % b;
  }
}
console.log(Calculator.add(9, 3));
console.log(Calculator.sub(9, 3));
console.log(Calculator.mul(9, 3));
console.log(Calculator.div(9, 3));
console.log(Calculator.mod(9, 3));
