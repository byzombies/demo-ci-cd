import { Helloworld } from '../src/helloworld.js';

describe('HelloWorld', function() {
	it('should greet the user', function() {
		const helloworld = new Helloworld('Test');
		expect(helloworld.greet()).toEqual('Hello World Test');
	});
});
