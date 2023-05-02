import axios from 'axios';
const API_URL = import.meta.env.VITE_REACT_API_URL;

export const getTasks = async () => {
    try {
        const tasks = axios.get(`${API_URL}/task`);
        return tasks;
    } catch (error) {
        throw error
    }
}

export const addTask = async (task) => {
    try {
        const response = axios.post(`${API_URL}/task`, { task });
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteTask = async (taskId) => {
    try {
        const response = axios.delete(`${API_URL}/task/${taskId}`);
        return response;
    } catch (error) {
        throw error
    }
}

export const updateTask = async (task) => {
    try {
        const response = axios.patch(`${API_URL}/task`, { task: task.text, taskId: task.taskId });
        return response;
    } catch (error) {
        throw error
    }
}

export const deleteAllTask = async () => {
    try {
        const response = axios.delete(`${API_URL}/task`);
        return response;
    } catch (error) {
        throw error
    }
}