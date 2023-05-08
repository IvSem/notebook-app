import { createSlice } from '@reduxjs/toolkit';
import { addTask, deleteTask, fetchTasks, toggleCompleted } from './operations';
import { toast } from 'react-toastify';
import { handlePending, handleRejected } from 'helpers/functions';

const tasksInitialState = {
	items: [],
	isLoading: false,
	error: null,
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState: tasksInitialState,
	extraReducers: {
		[fetchTasks.pending]: handlePending,
		[addTask.pending]: handlePending,
		[deleteTask.pending]: handlePending,
		[toggleCompleted.pending]: handlePending,
		[fetchTasks.rejected]: handleRejected,
		[addTask.rejected]: handleRejected,
		[deleteTask.rejected]: handleRejected,
		[toggleCompleted.rejected]: handleRejected,

		//?fetchTasks

		[fetchTasks.fulfilled](state, action) {
			state.error = null;
			state.isLoading = false;
			state.items = action.payload;
		},

		//?addTask

		[addTask.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			state.items.push(action.payload);
			toast.success('Todo successfully added');
		},

		//?deleteTask

		[deleteTask.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			const index = state.items.findIndex(
				task => task.id === action.payload.id
			);
			state.items.splice(index, 1);
			toast.success('Todo has been successfully deleted!');
		},

		//?toggleCompleted

		[toggleCompleted.fulfilled](state, action) {
			state.isLoading = false;
			state.error = null;
			const index = state.items.findIndex(
				task => task.id === action.payload.id
			);
			state.items.splice(index, 1, action.payload);
		},
	},
});

export const tasksReducer = tasksSlice.reducer;
