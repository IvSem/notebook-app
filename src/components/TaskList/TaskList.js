import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';

import css from './TaskList.module.css';
import {
	selectFilteredByNameTasks,
	selectVisibleTasks,
} from 'redux/tasks/selectors';
import { selecеtValueFilter } from 'redux/filter/selectors';

export const TaskList = () => {
	const visibleTasks = useSelector(selectVisibleTasks);
	const filteredTasksByName = useSelector(selectFilteredByNameTasks);
	const filterValue = useSelector(selecеtValueFilter);

	return (
		<ul className={css.list}>
			{filterValue.length > 0
				? filteredTasksByName?.map(task => (
						<li className={css.listItem} key={task.id}>
							<Task task={task} />
						</li>
				  ))
				: visibleTasks?.map(task => (
						<li className={css.listItem} key={task.id}>
							<Task task={task} />
						</li>
				  ))}
			{filteredTasksByName?.length === 0 && (
				<p className={css.errorFind}>
					The task <span>{filterValue}</span> was not found , enter the correct
					value
				</p>
			)}
		</ul>
	);
};
