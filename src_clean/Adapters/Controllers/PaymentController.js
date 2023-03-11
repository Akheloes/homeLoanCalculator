import CalculateMonthlyPaymentUseCase from "../../Application/CalculateMonthlyPaymentUseCase.js"
import WebPresenter from "../Presenters/WebPresenter.js"

export default class PaymentController {

    constructor(dependencies) {
        this.paymentRepository = dependencies.PersistanceService.paymentRepository || []
    }

    async getMonthlyPayment(requestStructure, _) {
        const calculateMonthlyPaymentUseCase = new CalculateMonthlyPaymentUseCase(this.paymentRepository, new WebPresenter(this.res))
        calculateMonthlyPaymentUseCase.executeInputPort(requestStructure)

        const useCaseOutput = await calculateMonthlyPaymentUseCase.execute()

        return useCaseOutput
    }
}
