import { useDispatch, useSelector } from 'react-redux';
import { MdClose } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';
import css from './Task.module.css';
import { deleteTask, toggleCompleted, toggleImportant } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';
import clsx from 'clsx';

export const Task = ({ task }) => {
	const isLoading = useSelector(selectIsLoading);
	const dispatch = useDispatch();
	const handleDelete = () => dispatch(deleteTask(task.id));
	const handleToggle = () => dispatch(toggleCompleted(task));
	const handleToggleImportant = () => dispatch(toggleImportant(task));

	return (
		<div className={css.wrapper}>
			<label className={css.label}>
				<input
					type="checkbox"
					className={css.checkbox}
					onChange={handleToggle}
					checked={task.completed}
				/>
				<p className={clsx(css.text, { [css.isImportant]: task.important })}>
					{task.text}
				</p>
			</label>

			<button
				className={clsx(css.starBtn, { [css.isImportant]: task.important })}
				onClick={handleToggleImportant}
				disabled={isLoading}
			>
				<BsStarFill
					size={20}
					className={clsx({ [css.isImportant]: task.important })}
				/>
			</button>

			<button className={css.btn} onClick={handleDelete} disabled={isLoading}>
				<MdClose size={24} />
			</button>
		</div>
	);
};
