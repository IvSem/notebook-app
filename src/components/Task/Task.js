import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { deleteTask, toggleCompleted } from 'redux/operations';
import { toast } from 'react-toastify';

export const Task = ({ task }) => {
	const dispatch = useDispatch();
	const handleDelete = () =>
		toast.promise(dispatch(deleteTask(task.id)), {
			pending: 'Todo is uninstalled',
		});
	const handleToggle = () => dispatch(toggleCompleted(task));

	return (
		<div className={css.wrapper}>
			<label className={css.label}>
				<input
					type="checkbox"
					className={css.checkbox}
					onChange={handleToggle}
					checked={task.completed}
				/>
				<p className={css.text}>{task.text}</p>
			</label>

			<button className={css.btn} onClick={handleDelete}>
				<MdClose size={24} />
			</button>
		</div>
	);
};
