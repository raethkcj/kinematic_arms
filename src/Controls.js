import React from 'react';

function Controls(props) {
	return (
		<div className="column">
			{props.links.map((link,index) => {
				return (
					<fieldset key={index}>
						<legend>Link {index+1}</legend>
						<div className="row">
							<label className="row">
								Angle
								<input type="range" min={-180} max={180}
									onChange={props.handleAngleInput}
									data-index={index}
									defaultValue={link.angle * (180 / Math.PI)}
								/>
							</label>
							<label className="row">
								Length
								<input type="range" min={10} max={100}
									onChange={props.handleLengthInput}
									data-index={index}
									defaultValue={link.length}
								/>
							</label>
						</div>
					</fieldset>
				)
			})}
		</div>
	)
}

export default Controls;
