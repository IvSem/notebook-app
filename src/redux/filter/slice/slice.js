import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from 'redux/constants';

const filtersInitialState = {
	value: '',
	status: statusFilters.all,
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState: filtersInitialState,
	reducers: {
		setValueFilter(state, action) {
			state.value = action.payload;
		},
		setStatusFilter(state, action) {
			state.status = action.payload;
		},
	},
});

export const { setStatusFilter, setValueFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
