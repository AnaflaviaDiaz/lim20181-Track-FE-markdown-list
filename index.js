const resolvePath = require('./filedirectory.js');
const requestLinks = require('./http.js');

const mdLinks = (path, options) => {
	let links = [];
	return new Promise((resolve, reject) => {
		resolvePath(path, links).then(result => {
			try {
				if (options.validate && options.stats) {
					const resultValidateStats = result;
					const linksU = [...new Set(resultValidateStats.map(item => item.href))];
					requestLinks(linksU).then(statusLinks => {
						resolve(`Total: ${resultValidateStats.length} \nUnique: ${linksU.length} \nBroken: ${statusLinks.length}`);
					});
				} else if (options.validate) {
					requestLinks(result).then(statusLinks => resolve(statusLinks));
				} else if (options.stats) {
					const unique = [...new Set(result.map(item => item.href))];
					resolve(`Total: ${result.length} \nUnique: ${unique.length}`);
				}
				else if (!options.validate && !options.stats) {
					resolve(result);
				}
			} catch (error) {
				reject(error);
			}
		});
	});
};

module.exports = mdLinks;
