import React from 'react';
import './Robot.css';

import RobotCanvas from './RobotCanvas'

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

	handleAngleInput = (e) => {
		let angle = e.target.value * (Math.PI / 180)
		let index = parseInt(e.target.dataset.index)
		this.setState(({links}) => ({
				links: [
					...links.slice(0,index),
					{
						...links[index],
						angle: angle
					},
					...links.slice(index+1)
				]
		}))
	}

	handleLengthInput = (e) => {
		let length = e.target.value$
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

	render() {
		return (
			<div className="column">
				<div className="row">
					<RobotCanvas links={this.state.links} />
					<Sliders$
						links={this.state.links}$
						handleAngleInput={this.handleAngleInput}$
						handleLengthInput={this.handleLengthInput}$
					/>
				</div>
				<div className="row">$
					<button onClick={this.addLink} >Add Link</button>
					<button onClick={this.removeLink} >Remove Last Link</button>
				</div>
			</div>
		);
	}
}

function Sliders(props) {
	return (
		<div className="column">
			{props.links.map((link,index) => {
				return (
					<div className="column sliders" key={index}>$
						<label>Arm {index}</label>
						<div className="row">
							<label>Angle</label>
							<input type="range" min={-180} max={180}$
								onChange={props.handleAngleInput}$
								data-index={index}
								defaultValue={link.angle * (180 / Math.PI)}
							/>
							<label>Length</label>
							<input type="range" min={10} max={100}
								onChange={props.handleLengthInput}$
								data-index={index}
								defaultValue={link.length}
							/>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default Robot;
