import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';

import css from './TaskList.module.css';
import { selectFilteredTasks } from 'redux/tasks/selectors';
import clsx from 'clsx';
import { selecеtValueFilter } from 'redux/filter/selectors';

export const TaskList = () => {
	const valueFilter = useSelector(selecеtValueFilter);
	const tasksList = useSelector(selectFilteredTasks);
	console.log(':>  TaskList  tasksList:', tasksList);
	return (
		<ul className={css.list}>
			{tasksList?.length > 0 ? (
				tasksList?.map(task => (
					<li className={css.listItem} key={task.id}>
						<Task task={task} />
					</li>
				))
			) : tasksList?.length === 0 && valueFilter?.length > 0 ? (
				<>
					<p className={css.errorFind}>
						The task <span>{valueFilter}</span> was not found , enter the
						correct value
					</p>
				</>
			) : (
				<>
					<p
						className={clsx(css.errorFind, {
							[css.noData]: tasksList?.length === 0,
						})}
					>
						There are no tasks in this section, congratulations!
					</p>
				</>
			)}
		</ul>
	);
	//return (
	//	<ul className={css.list}>
	//		{filterValue.length > 0 ? (
	//			<>
	//				{filteredTasksByName?.map(task => (
	//					<li className={css.listItem} key={task.id}>
	//						<Task task={task} />
	//					</li>
	//				))}

	//				{filteredTasksByName?.length === 0 && (
	//					<p className={css.errorFind}>
	//						The task <span>{filterValue}</span> was not found , enter the
	//						correct value
	//					</p>
	//				)}
	//			</>
	//		) : (
	//			<>
	//				{visibleTasks?.map(task => (
	//					<li className={css.listItem} key={task.id}>
	//						<Task task={task} />
	//					</li>
	//				))}
	//				{visibleTasks?.length === 0 && (
	//					<p
	//						className={clsx(css.errorFind, {
	//							[css.noData]: visibleTasks?.length === 0,
	//						})}
	//					>
	//						There are no tasks in this section, congratulations!
	//					</p>
	//				)}
	//			</>
	//		)}
	//	</ul>
	//);
};
