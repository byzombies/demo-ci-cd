function getMessage() {
	return 'True! WRONG';
}

if (typeof document !== 'undefined') {
	var element = document.getElementById('js-checker');
	if (element) {
		element.innerHTML = getMessage();
	}
}

module.exports = getMessage;
