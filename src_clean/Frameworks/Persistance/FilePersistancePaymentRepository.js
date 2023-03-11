import PaymentRepository from '../../Adapters/Gateways/PaymentRepository.js'
import { appendFile } from 'fs/promises'

export default class FilePersistancePaymentRepository extends PaymentRepository {

    constructor() {
        super()
    }

    async add(paymentInstance) {
        const data = `${paymentInstance.principal}, ${paymentInstance.yearlyIinterestRate}, ${paymentInstance.termInMonths}\n`
        const appendToFileResult = await appendFile('persistance.csv', data)

        return !appendToFileResult
    }
}
