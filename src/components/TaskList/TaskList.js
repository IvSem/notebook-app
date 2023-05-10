import { useSelector } from 'react-redux';
import { Task } from 'components/Task/Task';
import { selectAllTasks, selectVisibleTasks } from 'redux/selectors';
//import { statusFilters } from 'redux/constants';
import css from './TaskList.module.css';
import { useGetAllTasksQuery } from 'redux/tasks/slice/slice';

//const getVisibleTasks = (tasks, statusFilter) => {
//	switch (statusFilter) {
//		case statusFilters.active:
//			return tasks.filter(task => !task.completed);
//		case statusFilters.completed:
//			return tasks.filter(task => task.completed);
//		default:
//			return tasks;
//	}
//};

export const TaskList = () => {
	const visibleTasks = useSelector(selectVisibleTasks);

	//const tasks = useSelector(selectTasks);
	//const statusFilter = useSelector(selectStatusFilter);

	//const state = useSelector(state => {
	//	return state.taskApi;
	//});
	//console.log(':>  TaskList  state:', state);

	const { data } = useGetAllTasksQuery();
	console.log(':>  TaskList  data:', data);

	const { data: allTasks } = useSelector(selectAllTasks);
	console.log(':>  TaskList  allTasks2:', allTasks);

	//const visibleTasks = getVisibleTasks(tasks, statusFilter);

	return (
		<ul className={css.list}>
			{visibleTasks.map(task => (
				<li className={css.listItem} key={task.id}>
					<Task task={task} />
				</li>
			))}
		</ul>
	);
};
