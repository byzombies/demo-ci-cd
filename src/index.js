require('./style.css');
import { Helloworld } from './helloworld.js';

if (ENVIRONMENT === 'production') {
	console.info('Running app in the production environment!');
} else {
	console.info('Running app in the staging environment!');
}

const helloworld = new Helloworld('Chris');
console.log(helloworld.greet());
