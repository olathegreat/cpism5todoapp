import React, { useEffect, useState } from 'react'
import "./HomePage.css"
import NavComponent from '../components/NavComponent'
import CreateTask from '../components/CreateTask'
import Todo from '../components/Todo'
import Modal from '../components/Modal'

const HomePage = () => {

    const [todosArray, setTodosArray] = useState([
        {
            id: 1,
            task: "Wash Clothes",
            status: "Pending",
         

        },
        {
            id: 2,
            task: "Buy Groceries",
            status: "In Progress",
           

        },
        {
            id: 3,
            task: "Read a Book",
            status: "Completed",
           
        },
        {
            id: 4,
            task: "Exercise",
            status: "Pending",
          
        },
        {
            id: 5,
            task: "Clean the House",
            status: "In Progress",
           
        }
    ]);

    const addNewTaskFunction = (theTaskToAdd) => {
      
        //spread operator
        console.log("this is the task to be added", theTaskToAdd);
        setTodosArray([...todosArray, theTaskToAdd]);
        console.log("successfully added");
        console.log(todosArray);
    };

    const editTodosArrayFunction = (editedTodo) => {


        console.log("Edited Todo received in HomePage:", editedTodo);

        console.log([...todosArray,{
                 ...editedTodo,
                task: editedTodo.task,
                status: editedTodo.status,
        } ])




        // setTodosArray([
        //     ...todosArray,
        //     {
        //         ...editedTodo,
        //         task: editedTodo.task,
        //         status: editedTodo.status,
        //     }
        
        // ]);

        const newTodosArray = todosArray.map((todo) => {
            if (todo.id === editedTodo.id) {
                return {
                    ...todo,
                    task: editedTodo.task,
                    status: editedTodo.status,
                };
            }   
            return todo;
        });
        console.log("New Todos Array after edit:", newTodosArray);

         
        console.log("Todos Array after edit:", todosArray);
       
    }


  return (
      <div className='homepage'>
          <NavComponent />
          

          <main>
              
              <CreateTask taskAdderProps ={addNewTaskFunction} />

              <div className='todos-wrapper'>
                  
                  {
                      todosArray.map((todo) => (
                          <div  key={todo.id}>
                              
                              <Todo  todoData={todo}  propsEditTodoFunction={editTodosArrayFunction} />
                           </div>
                      ))
                  }
                  
            
              
              
          
                  
                    </div>
              

          </main>

          
    </div>
  )
}

export default HomePage