import React, { useContext } from 'react';
import Context from '../contexts/Context';


const Form = () => {
	const { name, handleName } = useContext(Context);

	return (
		<div className='input-div'>
			<div>
				<label>Name:</label>
				<input className='input-box' value={name} onChange={(e) => handleName(e)} />
			</div>
		</div>
	);
};

export default Form;