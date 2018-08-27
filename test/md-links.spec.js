const mdLinks = require('../index.js');
const path = require('path');

it('mdLinks para --validate', (done) => {
	const options = {
		stats: false,
		validate: true
	};
	mdLinks(path.join(process.cwd(), './test/prueba/hola/hola.md'), options).then((resultValidate) => {
		expect(resultValidate).toEqual([{ href: 'http://www.google.com',
		text: 'Markdown0',
		file: 'C:\\Users\\Anaflavia\\Desktop\\FAFU_PROY_LABORATORIA\\markdown\\lim20181-Track-FE-markdown-list\\test\\prueba\\hola\\hola.md',
		status: '200 OK' },
	  { href: 'https://es.wikipedia.org/wiki/Markdown',
		text: 'Markdown1',
		file: 'C:\\Users\\Anaflavia\\Desktop\\FAFU_PROY_LABORATORIA\\markdown\\lim20181-Track-FE-markdown-list\\test\\prueba\\hola\\hola.md',
		status: '200 OK' }]);
		done();
	});
});


it('mdLinks para --stats --validate', (done) => {
	const options = {
		stats: true,
		validate: true
	};
	mdLinks(path.join(process.cwd(), './test/prueba/README.md'), options).then((resultStatsValidate) => {
		expect(resultStatsValidate).toEqual('Total: 33 \nUnique: 30 \nBroken: 1');
		done();
	});
});

it('mdLinks para --stats', (done) => {
	const options = {
		stats: true,
		validate: false
	};
	mdLinks(path.join(process.cwd(), './test/prueba/hola/hola.md'), options).then((resultStats) => {
		expect(resultStats).toEqual('Total: 2 \nUnique: 2');
		done();
	});
});

it('mdLinks cuando no mande ninguna opción', (done) => {
	const options = {
		stats: false,
		validate: false
	};
	mdLinks(path.join(process.cwd(), './test/prueba/hola/hola.md'), options).then((resultStats) => {
		expect(resultStats).toEqual([{ href: 'https://es.wikipedia.org/wiki/Markdown',
		text: 'Markdown1',
		file: 'C:\\Users\\Anaflavia\\Desktop\\FAFU_PROY_LABORATORIA\\markdown\\lim20181-Track-FE-markdown-list\\test\\prueba\\hola\\hola.md' },
	  { href: 'http://www.google.com',
		text: 'Markdown0',
		file: 'C:\\Users\\Anaflavia\\Desktop\\FAFU_PROY_LABORATORIA\\markdown\\lim20181-Track-FE-markdown-list\\test\\prueba\\hola\\hola.md'} ]);
		done();
	});
});