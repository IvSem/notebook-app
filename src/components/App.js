import { AppBar, Layout, TaskForm, TaskList } from 'components';

export const App = () => {
	return (
		<Layout>
			<AppBar />
			<TaskForm />
			<TaskList />
		</Layout>
	);
};
