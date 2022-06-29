import { Group, FileInputField, FileInputLabel } from './file-input.styles';

const FileInput = ({ label, ...otherProps }) => {
	return (
		<Group>
			<FileInputLabel>{label}</FileInputLabel>
			<FileInputField {...otherProps} />
		</Group>
	);
};

export default FileInput;
