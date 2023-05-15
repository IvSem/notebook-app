import { useDispatch } from 'react-redux';
import css from './StatusFilter.module.css';

import { statusFilters } from 'redux/constants';
import { setStatusFilter } from 'redux/filter/slice/slice';

console.log(':>  statusFilters:', statusFilters);
export const StatusFilter = () => {
	const dispatch = useDispatch();

	const handleFilterChange = filter => {
		return dispatch(setStatusFilter(filter));
	};

	return (
		<div className={css.wrapperSel}>
			<select
				className={css.select}
				onChange={e => handleFilterChange(e.target.value)}
			>
				<option value={statusFilters.all}>All</option>
				<option value={statusFilters.active}>Active</option>
				<option value={statusFilters.completed}>Completed</option>
				<option value={statusFilters.important}>Important</option>
			</select>
		</div>
	);
};
