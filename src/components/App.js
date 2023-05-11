import { AppBar, Layout, TaskForm, TaskList } from 'components';
import { useEffect } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { DynamicAdapt } from 'helpers/adaptive';

import 'react-toastify/dist/ReactToastify.css';
import { useGetAllTasksQuery } from 'redux/tasks/slice/slice';
import { FilterForm } from './FilterForm/FilterForm';

export const App = () => {
	const { data: taskList, isLoading: loadingDB } = useGetAllTasksQuery();

	useEffect(() => {
		loadingDB && toast.info('Went to the server');
	}, [loadingDB]);

	useEffect(() => {
		const da = new DynamicAdapt('max');
		da.init();
	}, []);

	return (
		<Layout>
			<AppBar />
			<TaskForm />
			<div className="relocate"></div>
			<FilterForm data={taskList} />
			<TaskList />
			<ToastContainer
				position="bottom-center"
				autoClose={500}
				hideProgressBar={false}
				newestOnTop
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
				transition={Zoom}
			/>
		</Layout>
	);
};
