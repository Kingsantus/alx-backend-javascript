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
