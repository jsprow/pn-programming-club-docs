const body = document.querySelector('body')
const canvas = document.querySelector('canvas')

let innerWidth = window.innerWidth
let innerHeight = window.innerHeight

const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const colors = [
	'rgba(255, 134, 71, 0.90',
	'rgba(232, 97, 65, 0.90)',
	'rgba(255, 92, 65, 0.90)',
	'rgba(232, 65, 121, 0.90)',
	'rgba(255, 71, 224, 0.90)'
]
const randomColor = () => colors[Math.floor(Math.random() * colors.length)]

function Circle(x, y, dx, dy, radius, maxRadius, fill) {
	this.x = x
	this.y = y
	this.dx = dx
	this.dy = dy
	this.radius = radius

	this.draw = () => {
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
		c.fillStyle = fill
		c.fill()
	}

	this.update = () => {
		// avoid
		if (
			mouse.x - this.x < 100 &&
			mouse.x - this.x > -100 &&
			mouse.y - this.y < 100 &&
			mouse.y - this.y > -100
		) {
			if (mouse.x < this.x && this.dx < (Math.random() - 0.5) * 10) {
				this.dx += 0.5
			} else if (
				mouse.x > this.x && this.dx > -((Math.random() - 0.5) * 10)
			) {
				this.dx -= 0.5
			}
			if (mouse.y < this.y && this.dy < (Math.random() - 0.5) * 10) {
				this.dy += 0.5
			} else if (
				mouse.y > this.y && this.dy > -((Math.random() - 0.5) * 10)
			) {
				this.dy -= 0.5
			}
		}
		// grow
		if (
			mouse.x - this.x < 50 &&
			mouse.x - this.x > -50 &&
			mouse.y - this.y < 50 &&
			mouse.y - this.y > -50 &&
			this.radius < maxRadius
		) {
			this.radius += 2
		} else if (this.radius > radius) {
			this.radius -= 1
		}

		// wall bounce
		if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx
		}

		if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
			this.dy = -this.dy
		}

		this.x += this.dx
		this.y += this.dy

		this.draw()
	}
}

let mouse = {
	x: null,
	y: null
}

window.addEventListener('mousemove', e => {
	mouse.x = e.x
	mouse.y = e.y
})

window.addEventListener('resize', () => {
	innerWidth = window.innerWidth
	innerHeight = window.innerHeight

	canvas.width = innerWidth
	canvas.height = innerHeight

	init()
})

let circleArr = []

const init = () => {
	circleArr = []

	for (let i = 0; i < 300; i++) {
		let radius = Math.random() * 30 + 20
		let maxRadius = 100
		let x = Math.random() * (innerWidth - radius * 2) + radius
		let y = Math.random() * (innerHeight - radius * 2) + radius
		let dx = (Math.random() - 0.5) * 5
		let dy = (Math.random() - 0.5) * 5
		let fill = randomColor()

		circleArr.push(new Circle(x, y, dx, dy, radius, maxRadius, fill))
	}
}

function animate() {
	requestAnimationFrame(animate)
	c.clearRect(0, 0, innerWidth, innerHeight)

	for (let i = 0; i < circleArr.length; i++) {
		circleArr[i].update()
	}
}

init()
animate()
