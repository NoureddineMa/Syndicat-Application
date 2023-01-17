const app = require('../server')
const request = require('supertest')

describe("POST /login"  , () => {


describe('Auth', () => {
    it('should respond with a 400 status code', async () => {
        const res = await request(app)
        .post('/api/admin/login')
        .send({
            email: '',
            password: ''
        })
        expect(res.status).toBe(400)
    })
})

describe('Auth', () => {
    it('should respond with a 400 status code', async () => {
        const res = await request(app)
        .post('/api/admin/login')
        .send({
            email: 'noureddinemaher13@gmail.com',
            password: ''
        })
        expect(res.status).toBe(400)
    })
})

describe('Auth', () => {
    it('should respond with a 400 status code', async () => {
        const res = await request(app)
        .post('/api/admin/login')
        .send({
            email: '',
            password: 'test'
        })
        expect(res.status).toBe(400)
    })
})

describe('Auth', () => {
    it('should respond with a 400 status code', async () => {
        const res = await request(app)
        .post('/api/admin/login')
        .send({
            email: 'test@gmail.com',
            password: 'test'
        })
        expect(res.status).toBe(400)
    })
})

})