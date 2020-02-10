import React from 'react';
import './Robot.css';
import {Layer, Stage} from 'react-konva'
import {Transform} from 'konva'

import Link from './Link'

class RobotCanvas extends React.Component {
	linksList() {
		var currentOrigin = new Transform()
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

export default RobotCanvas
