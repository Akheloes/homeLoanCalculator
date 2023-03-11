
import CalculateMonthlyPaymentOutputPort from "../../Application/Interfaces/CalculateMonthlyPaymentOutputPort.js"

export default class WebPresenter extends CalculateMonthlyPaymentOutputPort {

  constructor(res) {
    super()
    this.res = res
  }

  presentMonthlyPayment(calculatedMonthlyPayment) {
    const viewModel = {
      monthlyPayment: `${ calculatedMonthlyPayment } €`
    }

    return viewModel
  }
}
