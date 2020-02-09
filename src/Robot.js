import React from 'react';
import './Robot.css';
import {Layer, Stage, Group} from 'react-konva'
import {Transform} from 'konva'

import Link from './Link'

class Robot extends React.Component {
	constructor(props) {
		super(props)

		this.canvasRef = React.createRef()

		this.state = {
			links: Array.from({length: 3}, () => this.newLink())
		}
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

	render() {
		return (
			<div>
				<RobotCanvas links={this.state.links} />
				<button onClick={this.addLink} >Add Link</button>
				<button onClick={this.removeLink} >Remove Last Link</button>
			</div>
		);
	}
}

class RobotCanvas extends React.Component {
	linksList() {
		var currentOrigin = new Transform()
		// Transform consctructor isn't returning 0,0 for some reason, maybe a bug in react-konva?
		currentOrigin.translate(250,250)

		return this.props.links.map((link,index) => {
			if(index > 0) {
				var previousLink = this.props.links[index-1]
				currentOrigin = currentOrigin.copy().translate(previousLink.length, 0)
			}
			currentOrigin = currentOrigin.copy().rotate(link.angle)

			return (
				<Link 
					key={index}
					origin={currentOrigin}
					length={link["length"]} 
					fill={link["color"]}
				/>
			)
		})
	}

	render() {
		return (
			<Stage width={500} height={500} >
				<Layer>
					{this.linksList()}
				</Layer>
			</Stage>
		);
	}
}

export default Robot;
