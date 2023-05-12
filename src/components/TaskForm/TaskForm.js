import { Button } from 'components/Button/Button';
import css from './TaskForm.module.css';

import { useAddTaskMutation } from 'redux/tasks/slice/slice';
import { toast } from 'react-toastify';
import { nanoid } from '@reduxjs/toolkit';
export const TaskForm = () => {
	const [addTask, { isLoading }] = useAddTaskMutation();

	const handleSubmit = event => {
		event.preventDefault();
		const form = event.target.elements;
		if (form.text.value.trim() !== '') {
			try {
				addTask(form.text.value);
				toast.success('Task added successfully');
			} catch (error) {
				toast.error('Failed to add task');
			}
		}

		event.target.reset();
	};

	return (
		<form className={`${css.form} `} onSubmit={handleSubmit}>
			<textarea
				className={css.field}
				type="text"
				name="text"
				placeholder="Enter task text..."
				id={nanoid()}
			/>
			<Button disabled={isLoading} type="submit" modificator="as_c">
				{isLoading ? 'Add task...' : 'Add task'}
			</Button>
		</form>
	);
};
