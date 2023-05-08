import { toast } from 'react-toastify';

export const handlePending = state => {
	state.isLoading = true;
};
export const handleRejected = (state, action) => {
	state.isLoading = false;
	state.error = action.payload;
	toast.error('Server error, please try again later');
};
