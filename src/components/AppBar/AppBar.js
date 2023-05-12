import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import css from './AppBar.module.css';

export const AppBar = () => {
	return (
		<header className={css.wrapper}>
			<h1 className={css.glitch}>
				<span>Notebook App</span>
			</h1>

			<section className={css.section}>
				<div className={css.sectionTaskList}>
					<h2 className={css.title}>Task List</h2>
					<TaskCounter />
				</div>
				<div className={css.sectionFilter}>
					<h2 className={css.title}>Filter by status</h2>
					<StatusFilter />
				</div>
			</section>
		</header>
	);
};
