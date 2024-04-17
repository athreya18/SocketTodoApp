import axios from "axios";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 31da222 (Last Changes)
>>>>>>> bf85ecb (Last Changes)

export const baseUrl = "https://final-api-todos.onrender.com"
export const createNewTask = async (title: string, desc: string) => {
    try {
      const resp = await axios.post(`${baseUrl}/api/todos`, { title:title, description: desc, status: "todo" });
      return resp || {};

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
import { socket } from "./socket";

export const baseUrl = "http://localhost:3001"

export const createNewTask = async (title: string, desc: string) => {
    try {
      const resp = await axios.post(`${baseUrl}/api/todos/`, { title:title, description: desc, status: "todo" });
        return resp || {};
    
>>>>>>> 10afdb4 (Last Changes)
>>>>>>> 31da222 (Last Changes)
>>>>>>> bf85ecb (Last Changes)
    } catch (error) {
        console.error('Error creating task:', error);
        return {error}
    }
};


