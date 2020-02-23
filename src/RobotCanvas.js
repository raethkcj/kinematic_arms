import React from 'react';
import './Robot.css';
import {Layer, Stage} from 'react-konva'
import {Transform} from 'konva'

import Link from './Link'

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
		return (
			<Stage width={this.props.width} height={this.props.width} onClick={this.props.onClick} >
				<Layer>
					{this.linksList()}
				</Layer>
			</Stage>
		);
	}
}

export default RobotCanvas
