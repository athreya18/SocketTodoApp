import create from 'zustand';
import { persist,createJSONStorage } from 'zustand/middleware';

type TaskList = {
  id:string;
  title: string;
  description: string;
  showEdit: boolean;
  status: string;
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 31da222 (Last Changes)
>>>>>>> bf85ecb (Last Changes)
      updateTask: (id: string, title: string, description: string, showEdit: boolean, status: string):any => {
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD

=======
      
>>>>>>> 70243a5 (New Commit)
      updateTask: (id: string, title: string, description: string, showEdit: boolean, status: string): any => {
        set((state: any) => {
          // Check if the task with the provided ID already exists
          const taskExists = state.createdTasks.some((task: TaskList) => task.id === id);
          
          if (taskExists) {
            return state;
          }
          
          return {
            createdTasks: [
              ...state.createdTasks,
              {
                id: id,
                title: title,
                description: description,
                showEdit: showEdit,
                status: status
              } as TaskList,
            ],
          };
        });
      },

>>>>>>> 10afdb4 (Last Changes)
>>>>>>> 31da222 (Last Changes)
>>>>>>> bf85ecb (Last Changes)
      editTodoTasks: (id: string, title: string, description: string, showEdit: boolean,status:string) => {
        set((state: any) => ({
          createdTasks:  state.createdTasks.map((task: any) =>
          id === task.id
            ? ({id: id,title: title, description: description, showEdit: showEdit, status:status} as TaskList)
            : task
        ),
        }));
      },
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 10afdb4 (Last Changes)
>>>>>>> 31da222 (Last Changes)
>>>>>>> bf85ecb (Last Changes)
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 10afdb4 (Last Changes)
>>>>>>> 31da222 (Last Changes)
>>>>>>> bf85ecb (Last Changes)
