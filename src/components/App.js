import { AppBar, Layout, TaskList } from 'components';
import { useEffect } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
//import { DynamicAdapt } from 'helpers/adaptive';

import 'react-toastify/dist/ReactToastify.css';
import { useGetAllTasksQuery } from 'redux/tasks/slice/slice';
import { FilterForm } from './FilterForm/FilterForm';

export const App = () => {
	const { isLoading: isLoadingDB } = useGetAllTasksQuery();

	useEffect(() => {
		isLoadingDB && toast.info('Went to the server');
	}, [isLoadingDB]);

	//useEffect(() => {
	//	const da = new DynamicAdapt('max');
	//	da.init();
	//}, []);

	return (
		<Layout>
			<AppBar />
			<FilterForm />
			<TaskList />
			{/*<TaskForm />*/}
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
