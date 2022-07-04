const Dropdown = ({ name, label, childrenValues }) => {
	return (
		<div className='dropdown-container'>
			<label htmlFor={name}>{label}</label>
			<select name={name} id={name}>
				{childrenValues.map((value) => {
					return (
						<option value={value} key={value}>
							{value}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Dropdown;
