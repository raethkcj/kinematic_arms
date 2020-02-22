import React from 'react';
import './Robot.css';
import {Layer, Stage} from 'react-konva'
import {Transform} from 'konva'

import Link from './Link'

class RobotCanvas extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			width: 0
		}
	}

	linksList() {
		let currentOrigin = new Transform()
		let midpoint = this.state.width / 2
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

	componentDidMount() {
		this.updateDimensions();
		window.addEventListener("resize", this.updateDimensions)
	}

	updateDimensions = () => {
		this.setState({
			width: Math.min(document.querySelector('html').clientWidth,500)
		})
	}

	render() {
		return (
			<Stage width={this.state.width} height={this.state.width} >
				<Layer>
					{this.linksList()}
				</Layer>
			</Stage>
		);
	}
}

export default RobotCanvas
