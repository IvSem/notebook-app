import { createSelector } from '@reduxjs/toolkit';
import { selectStatusFilter, selecеtValueFilter } from 'redux/filter/selectors';
import { statusFilters } from '../constants';
import { tasksApi } from './slice/slice';

export const selectAllTasksResults = tasksApi.endpoints.getAllTasks.select();

export const selectTasks = createSelector([selectAllTasksResults], allTasks => {
	return allTasks?.data;
});

export const selectVisibleTasks = createSelector(
	[selectTasks, selectStatusFilter, selecеtValueFilter],
	(tasks, statusFilter, valueFilter) => {
		if (valueFilter) {
			console.log('value v selectVisible');
		}

		switch (statusFilter) {
			case statusFilters.active:
				return tasks?.filter(task => {
					return !task.completed;
				});
			case statusFilters.completed:
				return tasks?.filter(task => task.completed);

			case statusFilters.important:
				return tasks?.filter(task => task.important);
			default:
				return tasks;
		}
	}
);
export const selectFilteredByNameTasks = createSelector(
	[selectVisibleTasks, selecеtValueFilter],
	(tasks, value) => {
		return tasks?.filter(task => {
			return task.text.toLowerCase().includes(value.trim().toLowerCase());
		});
	}
);

export const selectTaskCount = createSelector([selectTasks], tasks => {
	return tasks?.reduce(
		(count, { completed, important }) => {
			completed ? count.completed++ : count.active++;
			important && count.important++;
			return count;
		},
		{ active: 0, completed: 0, important: 0 }
	);
});
