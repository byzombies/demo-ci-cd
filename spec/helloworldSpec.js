class Helloworld {
	constructor(name) {
		this.name = name;
	}

	greet() {
		return `Hello World ${this.name}`;
	}
}

describe('HelloWorld', function() {
	it('should greet the user', function() {
		const helloworld = new Helloworld('Test');
		expect(helloworld.greet()).toEqual('Hello World Test');
	});
});
