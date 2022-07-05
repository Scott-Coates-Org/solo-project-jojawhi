import { Group, Input, FormInputLabel } from './form-input.styles.js';

const FormInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			{label && <FormInputLabel>{label}</FormInputLabel>}
			<Input {...otherProps} />
		</Group>
	);
};

export default FormInput;
