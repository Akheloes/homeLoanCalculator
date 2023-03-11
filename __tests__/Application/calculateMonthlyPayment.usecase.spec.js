import Payment from '../../src_clean/Entities/Payment.js'
import CalculateMonthlyPaymentUseCase from '../../src_clean/Application/CalculateMonthlyPaymentUseCase.js'
import { jest } from '@jest/globals'

describe('Calculate monthly payment use case', () => {
    it('should executes and present the result through the output port', async () => {

      const paymentRepositoryMock = {
        add: jest.fn(),
      }
      const outputPortMock = {
        presentMonthlyPayment: monthlyPayment => `${Number(monthlyPayment).toPrecision(2)} $`,
      }

      const calculateMonthlyPaymentUseCase = new CalculateMonthlyPaymentUseCase(paymentRepositoryMock, outputPortMock)

      const requestInput = {
        principal: 100000,
        rate: 4,
        term: 20,
      }

      await calculateMonthlyPaymentUseCase.executeInputPort(requestInput)
      const useCaseOutput = await calculateMonthlyPaymentUseCase.execute()

      expect(paymentRepositoryMock.add).toHaveBeenCalledTimes(1)
      expect(paymentRepositoryMock.add).toHaveBeenCalledWith(expect.any(Payment))

      expect(useCaseOutput).toBe(outputPortMock.presentMonthlyPayment('602'))
    })
})
