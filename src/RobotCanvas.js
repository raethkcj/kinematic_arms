import React from 'react';
import './Robot.css';
import {Layer, Stage, Group, Circle} from 'react-konva'
import {Transform} from 'konva'

import Link from './Link'

class Goal extends React.Component {
	constructor(props) {
		super(props)
		this.bloop = React.createRef()
	}

	componentDidMount() {
		this.bloop.current.to({
			scaleX: 2,
			scaleY: 2,
			opacity: 0,
			duration: 0.2
		})
	}

	render() {
		return (
			<Group>
				<Circle
					ref={this.bloop}
					x={this.props.goal.x}
					y={this.props.goal.y}
					fill="red"
					opacity={0.5}
					radius={6}
				/>
				<Circle
					x={this.props.goal.x}
					y={this.props.goal.y}
					fill="red"
					radius={5}
				/>
			</Group>
		)
	}
}

class RobotCanvas extends React.Component {
	linksList() {
		let currentOrigin = new Transform()
		let midpoint = this.props.width / 2
		currentOrigin.translate(midpoint,midpoint)

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
		let goal = this.props.goal ? <Goal goal={this.props.goal} /> : null
		return (
			<Stage width={this.props.width} height={this.props.width} onClick={this.props.onClick} >
				<Layer>
					{goal}
					{this.linksList()}
				</Layer>
			</Stage>
		);
	}
}

export default RobotCanvas
