#!/usr/bin/node
// testing API testing

const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

chai.use(chaiHttp);

describe('Index Page', () => {
	it('should return status 200 and correct message', (done) => {
		chai.request('http://localhost:7865')
			.get('/')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.text).to.equal('Welcome to the payment system');
				done();
			});
	});
});

describe('Cart Page', () => {
	it('should return status 200 and correct message for valid cart ID', (done) => {
		chai.request('http://localhost:7865')
			.get('/cart/12')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.text).to.equal('Payment methods for cart 12');
				done();
			});
	});
	
	it('should return status 404 for non-numeric cart ID', (done) => {
		chai.request('http://localhost:7865')
			.get('/cart/abc')
			.end((err, res) => {
				expect(res).to.have.status(404);
				expect(res.text).to.equal('Not Found');
				done();
			});
	});
	
	it('should return status 404 for missing cart ID', (done) => {
		chai.request('http://localhost:7865')
			.get('/cart/')
			.end((err, res) => {
				expect(res).to.have.status(404);
				expect(res.text).to.equal('Not Found');
				done();
			});
	});
});

describe('Available Payments', () => {
	it('should return status 200 and correct payment methods object', (done) => {
		chai.request('http://localhost:7865')
			.get('/available_payments')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.deep.equal({
					payment_methods: {
						credit_cards: true,
						paypal: false
					}
				});
				done();
			});
	});
});
	
describe('Login', () => {
	it('should return status 200 and correct welcome message', (done) => {
		chai.request('http://localhost:7865')
			.post('/login')
			.send({ userName: 'Bob' })
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.text).to.equal('Welcome Bob');
				done();
			});
	});
});
