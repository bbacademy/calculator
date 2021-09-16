const output = document.querySelector('output')

const fn = {
	add: (a, b) => (a + b),
	substract: (a, b) => (a - b),
	multiply: (a, b) => (a * b),
	divide: (a, b) => (a / b),
	power: (a, b) => Math.pow(a, b),
	percent: (a, b) => ((a / b * 100).toPrecision(5)),
}
const store = { value: 0, method: '' }

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
				store.value = undefined
				store.method = undefined
				break
			case 'equal':
				if (store.method)
					output.value = store.method(store.value, parseInt(output.value))
				break
			default:
				store.method = fn[target.name]
				store.value = parseInt(output.value)
				output.value = ''
		}
	}
})
