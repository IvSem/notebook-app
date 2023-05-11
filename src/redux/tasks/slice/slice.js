import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
	reducerPath: 'tasksApi',
	tagTypes: ['Tasks'],
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://6458bb8a4eb3f674df7bad13.mockapi.io',
	}),

	endpoints: builder => ({
		getAllTasks: builder.query({
			query: () => ({ url: '/tasks', method: 'get' }),
			providesTags: ['Tasks'],
		}),
		addTask: builder.mutation({
			query: body => {
				return { url: '/tasks', method: 'post', body: { text: body } };
			},
			invalidatesTags: ['Tasks'],
		}),
		deleteTask: builder.mutation({
			query: id => {
				return { url: `/tasks/${id}`, method: 'delete' };
			},
			invalidatesTags: ['Tasks'],
		}),
		toggleCompleted: builder.mutation({
			query: task => {
				return {
					url: `/tasks/${task.id}`,
					method: 'put',
					body: { completed: !task.completed },
				};
			},
			invalidatesTags: ['Tasks'],
		}),
		toggleImportant: builder.mutation({
			query: task => {
				return {
					url: `/tasks/${task.id}`,
					method: 'put',
					body: { important: !task.important },
				};
			},
			invalidatesTags: ['Tasks'],
		}),
	}),
});

export const {
	useGetAllTasksQuery,
	useAddTaskMutation,
	useDeleteTaskMutation,
	useToggleCompletedMutation,
	useToggleImportantMutation,
} = tasksApi;
