import { nanoid } from '@reduxjs/toolkit';
import { Button } from 'components/Button/Button';
import { ModalCreateTask } from 'components/ModaCreateTask/ModalCreateTask';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { useModal } from 'hooks/useModal';
import { useDispatch } from 'react-redux';
import { setValueFilter } from 'redux/filter/slice/slice';
import css from './FilterForm.module.css';

export const FilterForm = () => {
	const dispatch = useDispatch();
	const { isOpen, setIsOpen } = useModal();

	const handleChange = e => {
		dispatch(setValueFilter(e.currentTarget.value));
	};

	const filterId = nanoid();

	return (
		<>
			<label htmlFor={filterId} className={css.label}>
				<span>Filter by name</span>
				<input
					className={css.field}
					type="text"
					name="filter-name"
					id={filterId}
					placeholder="Enter any letter..."
					onChange={handleChange}
				/>
			</label>
			<Button
				onClick={() => {
					console.log('klick filterForm modalisOpen');
					setIsOpen(true);
				}}
			>
				Create Task
			</Button>

			{isOpen && (
				<ModalCreateTask isOpen={isOpen} onClose={setIsOpen}>
					<TaskForm />
				</ModalCreateTask>
			)}
		</>
	);
};
