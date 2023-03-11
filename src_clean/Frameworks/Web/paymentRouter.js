import express from 'express'
import PaymentController from '../../Adapters/Controllers/PaymentController.js'

const paymentRouter = (dependencies) => {
    const router = express.Router()

    const paymentController = new PaymentController(dependencies)
    
    router.route('/')
        .get(async (req, res) => {
            const inputStructure = req.query
            const control = await paymentController.getMonthlyPayment(inputStructure)

            res.render('paymentView.html', control)
        })

    return router
}

export default paymentRouter