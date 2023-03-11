
export default class Payment {
  
  constructor(principal, yearlyIinterestRate, termInMonths) {
    this.principal = principal
    this.yearlyIinterestRate = yearlyIinterestRate / 100
    this.termInMonths = termInMonths * 12
  }

  calculateMonthlyInterestRate() {

    return Math.pow(1 + this.yearlyIinterestRate, 1 / 12) - 1
  }

  calculateMonthlyPayment() {
    const monthlyPayment =
      (this.principal * this.calculateMonthlyInterestRate() * Math.pow(1 + this.calculateMonthlyInterestRate(), this.termInMonths)) /
      (Math.pow(1 + this.calculateMonthlyInterestRate(), this.termInMonths) - 1)

    return monthlyPayment.toFixed(2)
  }
}