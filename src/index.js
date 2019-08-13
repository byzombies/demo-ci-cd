require('./style.css');

class Helloworld {
	constructor(name) {
		this.name = name;
	}

	greet() {
		return `Hello World ${this.name}`;
	}
}

if (ENVIRONMENT === 'production') {
	console.info('Running app in the production environment!');
} else {
	console.info('Running app in the staging environment!');
}

const helloworld = new Helloworld('Chris');
console.log(helloworld.greet());
