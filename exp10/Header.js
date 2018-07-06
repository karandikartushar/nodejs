import React from 'react';

export const Header = (props) => {
	return(
		<div>
			<select>
			  <option value="volvo">Volvo</option>
			  <option value="saab">Saab</option>
			  <option value="mercedes">Mercedes</option>
			  <option value="audi">Audi</option>
			</select>
		</div>
	);
};