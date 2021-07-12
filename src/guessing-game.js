class GuessingGame {
    constructor() {}

    setRange(min, max) {
      this.max = max;
      this.min = min;
    }
  
    guess() {
        this.solution = Math.round((this.min + this.max) / 2);
        return this.solution;
    }
  
    lower() {
      this.max = this.solution;
    }
  
    greater() {
      this.min = this.solution;
    }
  }
  

module.exports = GuessingGame;
