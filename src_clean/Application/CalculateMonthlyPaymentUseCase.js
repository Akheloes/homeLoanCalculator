import Payment from '../Entities/Payment.js'
import CalculateMonthlyPaymentInputPort from './Interfaces/CalculateMonthlyPaymentInputPort.js'

export default class CalculateMonthlyPaymentUseCase extends CalculateMonthlyPaymentInputPort {

    constructor(paymentRepository, outputPort) {
        super()
        this.paymentRepository = paymentRepository
        this.outputPort = outputPort
        this.inputPort = null
    }

    executeInputPort(inputStructure) {
        this.inputPort = {
            principal: inputStructure.principal,
            rate: inputStructure.rate,
            term: inputStructure.term,
        }
    }
    
    async execute() {
        const { principal, rate, term } = this.inputPort
        const paymentEntity = new Payment(principal, rate, term)

        await this.paymentRepository.add(paymentEntity)

        const useCaseOutput = paymentEntity.calculateMonthlyPayment()

        return this.outputPort.presentMonthlyPayment(useCaseOutput)
    }
}

