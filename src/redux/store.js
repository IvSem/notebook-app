import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
import { tasksApi } from './tasks/slice/slice';

export const store = configureStore({
	reducer: {
		tasks: tasksReducer,
		filters: filtersReducer,
		[tasksApi.reducerPath]: tasksApi.reducer,
	},
	middleware: gDM => gDM().concat(tasksApi.middleware),
});
