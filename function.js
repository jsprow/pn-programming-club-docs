// Old School
function fooOld(bar1, bar2) {
	return [bar1, bar2]
}

// New School
const fooNew = (bar1, bar2) => {
	return [bar1, bar2]
}

const fooNewToo = (bar1, bar2) => [bar1, bar2]

const toLog = fooNewToo('thing1', 'thing2')

console.log(toLog)