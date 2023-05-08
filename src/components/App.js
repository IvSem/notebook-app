import { AppBar, Layout, Loader, TaskForm, TaskList } from 'components';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, Zoom } from 'react-toastify';
import { DynamicAdapt } from 'helpers/adaptive';

import { fetchTasks } from 'redux/operations';
//import { getError, getIsLoading } from 'redux/selectors';
import 'react-toastify/dist/ReactToastify.css';
import { getError, getIsLoading } from 'redux/selectors';

export const App = () => {
	const dispatch = useDispatch();
	const isLoading = useSelector(getIsLoading);
	const error = useSelector(getError);

	useEffect(() => {
		const da = new DynamicAdapt('max');
		da.init();
	}, []);

	useEffect(() => {
		dispatch(fetchTasks());
	}, [dispatch]);

	return (
		<Layout>
			<AppBar />
			<TaskForm />
			<div className="relocate"></div>

			{isLoading && !error && <Loader />}
			{error && <p>{error}</p>}
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
