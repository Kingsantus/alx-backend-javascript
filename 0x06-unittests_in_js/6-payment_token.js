#!/usr/bin/node
// success(boolean) using Async 

function getPaymentTokenFromApi(success) {
	if (success) {
		return Promise.resolve({data: 'Successful response from the API'});
	}
};

module.exports = getPaymentTokenFromApi;
