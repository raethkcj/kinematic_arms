import React from 'react';
import {Shape, Circle, Group} from 'react-konva'

window.JOINT_WIDTH = 12

class Link extends React.Component {
	render() {
		var originPoint = this.props.origin.point({x: 0,y: 0})

		// Points of a rectangle, based on the Transform
		var upperLeft = this.props.origin.point({x: 0, y: -window.JOINT_WIDTH / 2})
		var lowerLeft = this.props.origin.point({x: 0, y: +window.JOINT_WIDTH / 2})
		var upperRight = this.props.origin.point({x: this.props.length, y: -window.JOINT_WIDTH / 2})
		var lowerRight = this.props.origin.point({x: this.props.length, y: +window.JOINT_WIDTH / 2})

		return (
			<Group>
				<Shape 
					sceneFunc={(ctx,shape) => {
						ctx.beginPath()
						ctx.moveTo(upperLeft.x, upperLeft.y)
						ctx.lineTo(upperRight.x, upperRight.y)
						ctx.lineTo(lowerRight.x, lowerRight.y)
						ctx.lineTo(lowerLeft.x, lowerLeft.y)
						ctx.closePath()
						ctx.fillStrokeShape(shape)
					}}
					fill={this.props.fill}
				/>
				<Circle
					x={originPoint.x}
					y={originPoint.y}
					radius={window.JOINT_WIDTH / 2}
					fill="black"
				/>
			</Group>
		)
	}
};

export default Link
