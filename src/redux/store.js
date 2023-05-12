import { configureStore } from '@reduxjs/toolkit';
import { tasksApi } from './tasks/slice/slice';
import { filtersReducer } from './filter/slice/slice';

export const store = configureStore({
	reducer: {
		[tasksApi.reducerPath]: tasksApi.reducer,
		filters: filtersReducer,
	},
	middleware: gDM => gDM().concat(tasksApi.middleware),
});
