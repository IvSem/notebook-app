import { MdClose } from 'react-icons/md';
import { BsStarFill } from 'react-icons/bs';
import css from './Task.module.css';

import clsx from 'clsx';
import {
	useDeleteTaskMutation,
	useToggleCompletedMutation,
	useToggleImportantMutation,
} from 'redux/tasks/slice/slice';
import { nanoid } from '@reduxjs/toolkit';

export const Task = ({ task }) => {
	const [deleteTask, { isLoading: isLoadingDelete }] = useDeleteTaskMutation();
	const [toggleCompleted, { isLoading: isLoadingCompleted }] =
		useToggleCompletedMutation();
	const [toggleImportant, { isLoading: isLoadingImportant }] =
		useToggleImportantMutation();

	const handleDelete = () => deleteTask(task.id);
	const handleToggle = () => toggleCompleted(task);
	const handleToggleImportant = () => toggleImportant(task);
	const uniqueId = nanoid();

	return (
		<div className={css.wrapper}>
			<label className={css.label} htmlFor={uniqueId}>
				<input
					type="checkbox"
					id={uniqueId}
					className={css.checkbox}
					onChange={handleToggle}
					checked={task.completed}
					disabled={isLoadingCompleted}
				/>
				<p className={clsx(css.text, { [css.isImportant]: task.important })}>
					{task.text}
				</p>
			</label>

			<button
				className={clsx(css.starBtn, { [css.isImportant]: task.important })}
				onClick={handleToggleImportant}
				disabled={isLoadingImportant}
			>
				<BsStarFill
					size={20}
					className={clsx({ [css.isImportant]: task.important })}
				/>
			</button>

			<button
				className={css.btn}
				onClick={handleDelete}
				disabled={isLoadingDelete}
			>
				<MdClose size={24} />
			</button>
		</div>
	);
};
