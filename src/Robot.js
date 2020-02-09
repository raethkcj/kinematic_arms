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
			links: Array.from({length: 3}, () => { 
				return {
					length: this.randomLength(), 
					angle: this.randomAngle(),
					color: "red"
				}
			})
		}
	}

	// Set initial length from 30 to 100
	randomLength() {
		return Math.floor(Math.random() * 70 + 30)
	}

	// Set initial angle from -90 to 90 degrees
	randomAngle() {
		return (Math.floor(Math.random() * 180) - 90) * (Math.PI / 180)
		//return 45 * (Math.PI / 180)
	}

	render() {
		return (
			<RobotCanvas links={this.state.links} />
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