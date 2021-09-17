const output = document.querySelector('output')
const getValue = () => parseInt(output.value || 0)
const setValue = value => (output.value = value)

Object.assign(Math, {
	add: (a, b) => (a + b),
	substract: (a, b) => (a - b),
	multiply: (a, b) => (a * b),
	divide: (a, b) => (a / b),
	percent: (a, b) => Math.round(a / b * 100)
})

addEventListener('click', ({ target: { nodeName, name, value } }) => {
	switch (nodeName) {
		case 'INPUT':
			output.value += value
			break
		case 'BUTTON':
			switch (name) {
				case 'negate':
					setValue(-getValue())
					break
				case 'clear':
					delete output.compute
					setValue('')
					break
				case 'equal':
					if (output.compute) {
						setValue(output.compute(getValue()))
						delete output.compute
					} break
				default:
					const { [name]: fn } = Math
					if (typeof fn === 'function') {
						output.compute = fn.bind(null, getValue())
						setValue('')
					}
			}
	}
})
