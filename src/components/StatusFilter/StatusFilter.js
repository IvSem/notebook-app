import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';

import css from './StatusFilter.module.css';

import { statusFilters } from 'redux/constants';
import { setStatusFilter } from 'redux/filter/slice/slice';
import { selectStatusFilter } from 'redux/filter/selectors';

export const StatusFilter = () => {
	const dispatch = useDispatch();
	const filter = useSelector(selectStatusFilter);

	const handleFilterChange = filter => {
		return dispatch(setStatusFilter(filter));
	};

	return (
		<div className={css.wrapper}>
			<Button
				selected={filter === statusFilters.all}
				onClick={() => handleFilterChange(statusFilters.all)}
			>
				All
			</Button>
			<Button
				selected={filter === statusFilters.active}
				onClick={() => handleFilterChange(statusFilters.active)}
			>
				Active
			</Button>
			<Button
				selected={filter === statusFilters.completed}
				onClick={() => handleFilterChange(statusFilters.completed)}
			>
				Completed
			</Button>
			<Button
				selected={filter === statusFilters.important}
				onClick={() => handleFilterChange(statusFilters.important)}
			>
				Important
			</Button>
		</div>
	);
};
