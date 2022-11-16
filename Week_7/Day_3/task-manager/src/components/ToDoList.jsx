import { useState } from 'react';
import Task from './Task';
import Summary from './Summary';

const initialTasks = [
  {
    _id: '1a',
    name: 'Task1',
    description: 'Do something important',
    done: false,
  },
  {
    _id: '2b',
    name: 'Task2',
    description: 'Do something important',
    done: false,
  },
  {
    _id: '3c',
    name: 'Task3',
    description: 'Do something important',
    done: false,
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [doneTasks, setDoneTasks] = useState(0);

  const toggleTask = (id) => {
    //When dealing with arrays in React, we should always create a copy
    let tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      if (task._id === id) {
        task.done = !task.done;


        //using if else
       /*  if(task.done === true) setDoneTasks(doneTasks + 1) 
        else setDoneTasks(doneTasks - 1) */


        //using ternary
        task.done
        ? setDoneTasks(doneTasks + 1) 
        : setDoneTasks(doneTasks - 1);
      }
    });

    //Here we set the updated array as the state
    setTasks(tasksCopy);
  };

  return (
    <div>
      <Summary doneTasks={doneTasks} />

      <div className="todo-container">
        {tasks.map((task) => (
          <Task key={task._id} task={task} toggleTask={toggleTask} />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
