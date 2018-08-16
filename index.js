#!/usr/bin/env node

'use strict';

const fs = require('fs'),
	path = require('path'),
	myMarked = require('marked'),
	[, , ...args] = process.argv /* interpreta comandos en cli*/ ,
	toAbsolutePath = require('to-absolute-path'),
	extMd = /.*\.(m(?:d(?:te?xt|o?wn)?|arkdown|kdn?)|text)$/,
	extUrlMd = /__|\*|\#|(?:\[([^\]]*)\]\([^)]*\))/gm;
let arrContentLinks = [];

const route = toAbsolutePath(args[0]);

const validateDirectory = (pathroute) => {
	fs.readdir(pathroute, 'utf8', (err, contentdir) => {
		if (err) throw err;
		contentdir.map(content => {
			directoryFile(`${pathroute}/${content}`);
		});
	});
};

const validateFile = (route) => {
	fs.readFile(route, 'utf8', (err, data) => {
		const links = []
		if (err) throw err;
		// obtener links opt3 | mezclando opt1 y opt2
		const renderer = new myMarked.Renderer();
		renderer.link = (href, title, text) => {
			links.push({ text, href, route })
			return '';
		};
		myMarked(data, {renderer: renderer});
		// como saber cuando es el último para que imprima el resultado concatenado
		console.log(links);
	});
};

const directoryFile = (pathroute) => {
	fs.stat(pathroute, (err, stats) => {
		if (stats) {
			if (stats.isDirectory()) {
				fs.readdir(pathroute, 'utf8', (err, contentdir) => {
					if (err) throw err;
					contentdir.map(content => {
						directoryFile(path.join(pathroute, content));
					});
				});
			}
			if (stats.isFile() && extMd.test(path.extname(pathroute))) {
				validateFile(pathroute);
			}
		} else {
			console.log(`\n Uso: \n\n$ md-links <route> <options> \n\n<route> es la ruta del archivo o carpeta a evaluar \n<options> tendrán los valores de:
--stats, muestra cantidad de links y cantidad de links únicos \n--validate, muestra ruta de archivo, texto de referencia, link, estado de link \n--stats --validate, muestra cantidad de links, cantidad de links únicos y cantidad de links rotos`);
		}
	});
};

directoryFile(route);

// validacion de opciones en comando
// if (args[1] === '--stats' && args[2] === '--validate') {
// 	console.log(args[1], args[2]);
// } else if (args[1] === '--stats' && args[2] === undefined) {
// 	console.log(`la opcion es ${args[1]}`);
// } else if (args[1] === '--validate' && args[2] === undefined) {
// 	console.log(`la opcion es ${args[1]}`);
// }
