const output = document.querySelector('output')

const fn = {
	add: (a, b) => (a + b),
	substract: (a, b) => (a - b),
	multiply: (a, b) => (a * b),
	divide: (a, b) => (a / b),
	power: (a, b) => Math.pow(a, b),
	percent: (a, b) => ((a / b * 100).toPrecision(5)),
}
let compute = null

addEventListener('click', ({ target }) => {
	if (target.matches('input')) {
		output.value += target.value
	}
	if (target.matches('button')) {
		switch (target.name) {
			case 'negate':
				output.value = parseInt(output.value || 0) * -1
				break
			case 'clear':
				output.value = ''
				compute = null
				break
			case 'equal':
				if (compute) {
					output.value = compute(parseInt(output.value))
					compute = null
				}
				break
			default:
				if (target.name in fn) {
					compute = fn[target.name].bind(null, parseInt(output.value))
					output.value = ''
				}
		}
	}
})
