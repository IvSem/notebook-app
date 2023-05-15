import { nanoid } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { setValueFilter } from 'redux/filter/slice/slice';
import css from './FilterForm.module.css';

export const FilterForm = () => {
	const dispatch = useDispatch();

	const handleChange = e => {
		dispatch(setValueFilter(e.currentTarget.value));
	};

	const filterId = nanoid();

	return (
		<div className={css.wrapper}>
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
		</div>
	);
};
