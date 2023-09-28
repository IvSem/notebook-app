import { AppBar, Button, Layout, TaskForm, TaskList } from 'components';
import { useModal } from 'hooks/useModal';
import { useEffect } from 'react';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import { IoAddCircleSharp } from 'react-icons/io5';
//import { DynamicAdapt } from 'helpers/adaptive';

import 'react-toastify/dist/ReactToastify.css';
import { useGetAllTasksQuery } from 'redux/tasks/slice/slice';
import { Modal } from './Modal/Modal';

export const App = () => {
	const { isLoading: isLoadingDB } = useGetAllTasksQuery();
	const { isOpen, setIsOpen } = useModal();

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
			<>
				<Button
					modificator="js_s"
					onClick={() => {
						console.log('klick filterForm modalisOpen');
						setIsOpen(true);
					}}
				>
					Create Task (Artem)
					<IoAddCircleSharp size={20} />
				</Button>

				<Modal open={isOpen} onClose={() => setIsOpen(false)}>
					<TaskForm onClose={() => setIsOpen(false)} />
				</Modal>
			</>
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
