import { BaseButton } from './button.styles';

export const BUTTON_TYPES = {
	base: 'base',
};

const getButton = (buttonType = BUTTON_TYPES.base) => {
	return {
		[BUTTON_TYPES.base]: BaseButton,
	}[buttonType];
};

const Button = ({ children, buttonType, ...otherProps }) => {
	const CustomButton = getButton(buttonType);

	return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
