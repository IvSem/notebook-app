import { useSelector } from 'react-redux';
import { selectTaskCount } from 'redux/tasks/selectors';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
	const count = useSelector(selectTaskCount);
	return (
		<div className={css.wrapper}>
			<p className={css.text}>Active: {count?.active}</p>
			<p className={css.text}>Completed: {count?.completed}</p>
			<p className={css.text}>Important: {count?.important}</p>
		</div>
	);
};
