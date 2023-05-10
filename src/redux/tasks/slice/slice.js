import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const tasksApi = createApi({
	reducerPath: 'tasksApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://6458bb8a4eb3f674df7bad13.mockapi.io',
	}),
	endpoints: builder => ({
		getAllTasks: builder.query({
			query: () => `/tasks`,
		}),
	}),
});

export const { useGetAllTasksQuery } = tasksApi;
