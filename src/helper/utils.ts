import axios from "axios";

export const createNewTask = async (title: string, desc: string) => {
    try {
      const resp = await axios.post('http://localhost:3001/api/todos', { title:title, description: desc, status: "todo" });
      return resp || {};

    } catch (error) {
        console.error('Error creating task:', error);
        return {error}
    }
};
