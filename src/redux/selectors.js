import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import { tasksApi } from './tasks/slice/slice';

export const selectTasks = state => state.tasks.items;

export const selectIsLoading = state => state.tasks.isLoading;

export const selectError = state => state.tasks.error;

export const selectStatusFilter = state => state.filters.status;

export const selectTaskCount = createSelector([selectTasks], tasks => {
	return tasks.reduce(
		(count, task) => {
			if (task.completed) {
				count.completed += 1;
			} else {
				count.active += 1;
			}
			return count;
		},
		{ active: 0, completed: 0 }
	);
});

export const selectVisibleTasks = createSelector(
	[selectTasks, selectStatusFilter],
	(tasks, statusFilter) => {
		switch (statusFilter) {
			case statusFilters.active:
				return tasks.filter(task => !task.completed);
			case statusFilters.completed:
				return tasks.filter(task => task.completed);
			default:
				return tasks;
		}
	}
);

export const selectAllTasks = tasksApi.endpoints.getAllTasks.select();
