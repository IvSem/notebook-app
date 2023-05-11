import { AppBar, Layout, TaskForm, TaskList } from 'components';
import { useEffect } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { DynamicAdapt } from 'helpers/adaptive';

import 'react-toastify/dist/ReactToastify.css';
import { useGetAllTasksQuery } from 'redux/tasks/slice/slice';

export const App = () => {
	const { isLoading: loadingDB } = useGetAllTasksQuery();

	useEffect(() => {
		loadingDB && toast.loading('asfasfasf', { autoClose: 500 });
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
