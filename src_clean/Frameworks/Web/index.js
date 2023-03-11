import express from 'express'
import paymentRouter from './paymentRouter.js'

const apiRouter = (dependencies) => {
    const routes = express.Router()
    const paymentRouterInstance = paymentRouter(dependencies)

    routes.use('/monthlypayment', paymentRouterInstance)

    return routes
}

export default apiRouter