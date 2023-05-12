import clsx from 'clsx';
import css from './Button.module.css';

export const Button = ({
	selected = false,
	type = 'button',
	children,
	disabled,
	modificator,
	onClick,
	...otherProps
}) => {
	return (
		<button
			className={clsx(css.btn, {
				[css.as_c]: modificator,
				[css.isSelected]: selected,
			})}
			type={type}
			disabled={disabled}
			onClick={onClick}
			{...otherProps}
		>
			{children}
		</button>
	);
};
