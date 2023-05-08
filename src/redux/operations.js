import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6458bb8a4eb3f674df7bad13.mockapi.io';

export const fetchTasks = createAsyncThunk(
	'tasks/fetchAll',
	async (_, thunkAPI) => {
		try {
			const response = await axios.get('/tasks');
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const addTask = createAsyncThunk(
	'tasks/addTask',
	async (text, thunkAPI) => {
		try {
			const response = await axios.post('/tasks', { text });
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const deleteTask = createAsyncThunk(
	'tasks/deleteTask',
	async (taskId, thunkAPI) => {
		try {
			const response = await axios.delete(`/tasks/${taskId}`);
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);

export const toggleCompleted = createAsyncThunk(
	'tasks/toggleCompleted',
	async (task, thunkAPI) => {
		try {
			const response = await axios.put(`/tasks/${task.id}`, {
				completed: !task.completed,
			});
			return response.data;
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
);
