// Instructions:

// 1. Create a function that adds two numbers.
// 2. Values will be sent as a two-value array (example: [1, 2]).
// 3. Function must return the correct sum.

// Bonus 1. Function will ignore non-number values.
// Bonus 2. Function will handle more than two values in the array.

const arr = [1, 2, 3, 5]

const adder = arr => {
	let empty = 0
	let mapped = arr.map(number => empty += number)

	return empty
}

const isAdded = adder(arr)

isAdded
