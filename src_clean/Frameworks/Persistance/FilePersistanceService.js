import FilePersistancePaymentRepository from './FilePersistancePaymentRepository.js'
import PersistanceService from '../../Adapters/Gateways/PersistanceService.js'

export default class FilePersistanceService extends PersistanceService {

    constructor() {
        super()
        this.paymentRepository = new FilePersistancePaymentRepository()
    }
}
