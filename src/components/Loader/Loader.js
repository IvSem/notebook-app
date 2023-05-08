import ReactLoading from 'react-loading';
import css from './Loader.module.css';

export const Loader = () => {
	return (
		<div className={css.Loader}>
			<ReactLoading type="spinningBubbles" color="yellow" />
		</div>
	);
};
