class SmartCalculator {
  constructor(initialValue) {
    // your implementation
    this.number1 = initialValue + '';
    this.valueOf = () => eval(this.number1);
  }

  add(number) {
    // your implementation
     this.number1 = this.number1 + ' + ' + number
     return this;
  }
  
  subtract(number) {
    // your implementation
    this.number1 = this.number1 + ' - ' + number;
    return this;
  }

  multiply(number) {
    // your implementation
    this.number1 =  this.number1 + ' * ' + number;
    return this;
  }

  devide(number) {
    // your implementation
     this.number1 =  this.number1 + ' / ' + number;
     return this
  }

  pow(number) {
    // your implementation
    
    this.number1 = "Math.pow(" + this.number1 + "," + number + ")"
    return this
  }
}

module.exports = SmartCalculator;
