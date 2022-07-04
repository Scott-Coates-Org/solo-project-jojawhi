const CheckboxInput = ({ name, label, ...otherProps }) => {
	return (
		<div className='checkbox-container'>
			<label htmlFor={name}>{label}</label>
			<input type='checkbox' {...otherProps} />
		</div>
	);
};

export default CheckboxInput;
