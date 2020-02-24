import React from 'react';
import './Robot.css';
import {Transform} from 'konva';

import RobotCanvas from './RobotCanvas'
import Controls from './Controls'

class Robot extends React.Component {
	constructor(props) {
		super(props)

		this.canvasRef = React.createRef()

		this.state = {
			width: 0,
			links: Array.from({length: 3}, () => this.newLink()),
			goal: undefined,
			timeoutID: undefined
		}
	}

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions)
	}

	updateDimensions = () => {
		this.setState({
			width: Math.min(document.querySelector('html').clientWidth,500)
		})
	}

	newLink() {
		return {
			length: this.randomLength(),
			angle: this.randomAngle(),
			color: this.randomColor()
		}
	}

	addLink = () => {
		if(this.state.links.length < 10) {
			this.setState(prevState => ({
				links: [...prevState.links, this.newLink()]
			}))
		}
	}

	removeLink = () => {
		if(this.state.links.length > 1) {
			this.setState(prevState => ({
				links: prevState.links.slice(0,-1)
			}))
		}
	}

	// Set initial length from 30 to 100
	randomLength() {
		return Math.floor(Math.random() * 70 + 30)
	}

	// Set initial angle from -90 to 90 degrees
	randomAngle() {
		return (Math.floor(Math.random() * 180) - 90) * (Math.PI / 180)
	}

	// Set initial color with random hue, 100% saturation, 50% lightness
	randomColor() {
		return "hsl(" + 360 * Math.random() + ",100%,50%)"
	}

	setAngle(index, value) {
		if(value < -Math.PI) {
			value = 2*Math.PI - value
		}
		if(value > Math.PI) {
			value -= 2*Math.PI
		}
		this.setState(({links}) => ({
				links: [
					...links.slice(0,index),
					{
						...links[index],
						angle: value
					},
					...links.slice(index+1)
				]
		}))
	}

	handleAngleInput = (e) => {
		let index = parseInt(e.target.dataset.index)
		let angle = e.target.value * (Math.PI / 180)
		this.setAngle(index, angle)
	}

	handleLengthInput = (e) => {
		let length = e.target.value
		let index = parseInt(e.target.dataset.index)
		this.setState(({links}) => ({
			links: [
				...links.slice(0,index),
				{
					...links[index],
					length: length
				},
				...links.slice(index+1)
			]
		}))
	}

	calculateDistance(links) {
		let origin = new Transform()
		let midpoint = this.state.width / 2
		origin.translate(midpoint,midpoint)

		links.forEach(link => {
			origin.rotate(link.angle)
			origin.translate(link.length, 0)
		})

		let tip = origin.point({x: 0, y: 0})
		return Math.hypot(this.state.goal.x - tip.x, this.state.goal.y - tip.y)
	}

	handleClick = (e) => {
		if(typeof this.state.timeoutID === 'number') {
			clearTimeout(this.state.timeoutID)
			this.setState({
				goal: undefined,
				timeoutID: undefined
			})
		}

		let goal = e.target.getStage().getPointerPosition()
		this.setState({
			goal: goal
		})

		let distance = this.calculateDistance(this.state.links)
		let maxSpeed = Number.MAX_VALUE

		// Run each inverseKinStep in a timeout, and store the timeout ID in state.
		// This is so that if a new goal is set while we are working on a previous goal,
		// we can properly abandon the previous goal and start working on the new one.
		let timeoutID = setTimeout(this.inverseKinStep(distance, maxSpeed), 0)
		this.setState({
			timeoutID: timeoutID
		})
	}

	// inverseKinStep() runs "recursively" using timeouts. As long as it keeps making
	// progress towards the goal, it sets a new timeout to call itself again.
	// If the goal is reached, or we can't make any significant progress,
	// it stops calling itself and clears the timeout ID in state.
	inverseKinStep = (distance, maxSpeed) => {
		if(distance > 3 && maxSpeed > 0.5) {
			let previousGradients = Array(this.state.links.length).fill(0)
			let speeds = Array(this.state.links.length).fill(0)
			let links = this.state.links.map(link => ({
				...link
			}))

			links.forEach((link,i) => {
				link.angle += (Math.PI / 180)
				let up = this.calculateDistance(links)
				link.angle -= 2 * (Math.PI / 180)
				let down = this.calculateDistance(links)

				let gradient = up - down
				if(previousGradients[i] * gradient < 0) {
					let newAngle = this.state.links[i].angle - (Math.PI / 180) * (speeds[i] * previousGradients[i]) / (gradient - previousGradients[i])
					link.angle = newAngle
					this.setAngle(i, newAngle)
					speeds[i] = 0
				} else {
					speeds[i] += gradient
				}

				previousGradients[i] = gradient
				let newAngle = this.state.links[i].angle - speeds[i] * (Math.PI / 180)
				link.angle = newAngle
				this.setAngle(i, newAngle)
			})

			distance = this.calculateDistance(this.state.links)
			maxSpeed = speeds.reduce((acc,curr) => Math.max(acc,Math.abs(curr)))

			let timeoutID = setTimeout(() => this.inverseKinStep(distance, maxSpeed), 15)
			this.setState({
				timeoutID: timeoutID
			})
		} else {
			this.setState({
				goal: undefined,
				timeoutID: undefined
			})
		}
	}

	render() {
		return (
			<div className="row">
				<div className="column">
					<RobotCanvas
						width={this.state.width}
						links={this.state.links}
						goal={this.state.goal}
						onClick={this.handleClick}
					/>
					<div className="row">
						<button onClick={this.addLink} >Add Link</button>
						<button onClick={this.removeLink} >Remove Last Link</button>
					</div>
				</div>
				<Controls
					links={this.state.links}
					handleAngleInput={this.handleAngleInput}
					handleLengthInput={this.handleLengthInput}
				/>
			</div>
		);
	}
}

export default Robot;
