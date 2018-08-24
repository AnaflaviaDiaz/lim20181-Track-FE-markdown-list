const extMd = /.*\.(m(?:d(?:te?xt|o?wn)?|arkdown|kdn?)|text)$/;
const myMarked = require('marked');
const fs = require('fs');
const path = require('path');

// const usage = () => {
// 	console.log(`\n Uso: \n\n$ md-links <route> <options> \n\n<route> es la ruta del archivo o carpeta a evaluar \n<options> tendrán los valores de:
// --stats, muestra cantidad de links y cantidad de links únicos \n--validate, muestra ruta de archivo, texto de referencia, link, estado de link \n--stats --validate, muestra cantidad de links, cantidad de links únicos y cantidad de links rotos`);
// };

const validateFile = (route, links) => {
	const data = fs.readFileSync(route, 'utf8');
	const renderer = new myMarked.Renderer();
	renderer.link = (href, title, text) => {
		links.push({ href, text, file: route });
		return '';
	};
	myMarked(data, { renderer });
};

const directoryFile = (pathroute, accum) => {
	const stats = fs.statSync(pathroute);
	if (stats.isDirectory()) {
		const contentdir = fs.readdirSync(pathroute, 'utf8');
		contentdir.map(content => {
			directoryFile(path.join(pathroute, content), accum);
		});
	}
	if (stats.isFile() && extMd.test(path.extname(pathroute))) {
		validateFile(pathroute, accum);
	}
};

const resolvePath = (route, result) => {
	const promise = new Promise((resolve, reject) => {
		try {
			directoryFile(route, result);
			resolve(result);
		} catch (e) {
			reject(e);
		}
	});
	return promise;
};

module.exports = resolvePath;
