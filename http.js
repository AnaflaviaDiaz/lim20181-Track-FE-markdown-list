const request = require('request');
const rp = require('request-promise');

const requestLink = (arr) => {
	let arrLinksFail = [];
	const promise = new Promise((resolve, reject) => {
		try {
			if (typeof (arr[0]) === 'string') {
				arr.map(content => {
					request(content, (error, response) => {
						if (error) arrLinksFail.push(content);
					});
				});
				resolve(arrLinksFail);
			} else {
				console.log('... cargando');
				arr.map((content) => {
					rp({ uri: content.href, resolveWithFullResponse: true })
						.then(response => {
							arrLinksFail.push({ href: content.href, text: content.text, file: content.file, status: `${response.statusCode} ${response.statusMessage}`});
							if (arr.length === arrLinksFail.length) resolve(arrLinksFail);
						})
						.catch(function (err) {
							arrLinksFail.push({ href: content.href, text: content.text, file: content.file, status: 'fail'});
							if (arr.length === arrLinksFail.length) resolve(arrLinksFail);
						});
				});
			}
		} catch (error) {
			reject(error);
		}
	});
	return promise;
};

module.exports = requestLink;
