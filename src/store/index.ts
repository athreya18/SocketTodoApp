import create from 'zustand';
import { persist,createJSONStorage } from 'zustand/middleware';

type TaskList = {
<<<<<<< HEAD
  id:string;
  title: string;
  description: string;
  showEdit: boolean;
  status: string;
=======
    id:string;
    title: string;
    description: string;
    showEdit: boolean;
    status: string;
>>>>>>> d3c462542e56ac9d297efd0be6af0d9d27531bc9
};

export const useTaskList = create(
  persist(
    (set) => ({
      createdTasks: [],

      allTask: (data: TaskList[]) => {
        set((state: any) => ({
            createdTasks: data
        }))
      },
      updateTask: (id: string, title: string, description: string, showEdit: boolean, status: string) => {
        set((state: any) => ({
          createdTasks: [
            ...state.createdTasks,
            {
              id: id,
              title: title,
              description: description,
              showEdit: showEdit,
              status:"todo"
            } as TaskList,
          ],
        }));
      },
      editTodoTasks: (id: string, title: string, description: string, showEdit: boolean,status:string) => {
        set((state: any) => ({
          createdTasks:  state.createdTasks.map((task: any) =>
          id === task.id
            ? ({id: id,title: title, description: description, showEdit: showEdit, status:status} as TaskList)
            : task
        ),
        }));
      },
      deleteTask: (id: string) => {
        set((state: any) => ({
          createdTasks: state.createdTasks.filter(
            (data: any) => data.id !== id
          ),
        }));
      },
      deleteAlltasks:() =>{
        set((state: any) => ({
          createdTasks: state.createdTasks.filter(
            (task: any) => task.status === "completed"
          ),
        }));
      }
    }),  
    {
      name: 'taskList', 
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
