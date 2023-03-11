import Payment from '../../src_clean/Entities/Payment.js'

describe('Monthly payments calculation', () => {
    it('should return the proper value of a principal of zero', done => {
        let payment = new Payment(0, 3, 20)
        expect(payment.calculateMonthlyPayment()).toEqual('0.00')
        done()
    })

    it('should return the appropriate monthly payment for a 100k principal, 4% yearly rate and 20 years payment plan', done => {
        let payment = new Payment(100000, 4, 20)
        expect(payment.calculateMonthlyPayment()).toEqual('602.22')
        done()
    })

    it('should return the appropriate monthly payment for a 200k for a 5% yearly rate and 20 years payment plan', done => {
        let payment = new Payment(200000, 5, 20)
        expect(payment.calculateMonthlyPayment()).toEqual('1307.67')
        done()
    })
})
