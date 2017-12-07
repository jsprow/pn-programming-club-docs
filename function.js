// Old School (hoisted, statement)
function fooOld(bar1, bar2) {
	return [bar1, bar2]
}

// New School (not hoisted, expression)
const fooNew = (bar1, bar2) => {
	return [bar1, bar2]
}