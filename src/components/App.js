import { AppBar, Layout, TaskForm, TaskList } from 'components';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toast, ToastContainer, Zoom } from 'react-toastify';

import { fetchTasks } from 'redux/operations';
//import { getError, getIsLoading } from 'redux/selectors';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
	const dispatch = useDispatch();
	//const isLoading = useSelector(getIsLoading);
	//const error = useSelector(getError);

	useEffect(() => {
		toast.promise(dispatch(fetchTasks()), {
			pending: 'The list of notes is loading',
			//success: 'Promise  Loaded',
			//error: 'error',
		});
	}, [dispatch]);

	return (
		<Layout>
			<AppBar />
			<TaskForm />
			{/*{isLoading && !error && <Loader />}*/}
			{/*{error && <p>{error}</p>}*/}
			<TaskList />
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
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
