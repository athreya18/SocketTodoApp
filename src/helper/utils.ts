import axios from "axios";
import { io } from 'socket.io-client';
export const baseUrl = "https://socketapi-2.onrender.com"

// export const baseUrl = "https://final-api-todos.onrender.com"

export const createNewTask = async (title: string, desc: string) => {
    try {
      const resp = await axios.post(`${baseUrl}/api/todos/`, { title:title, description: desc, status: "todo" });
      const socket=io();
      socket.emit('newTask',resp.data);

        return resp.data || {};
    } catch (error) {
        console.error('Error creating task:', error);
        return {error}
    }
};
