import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTaskToList } from "../features/counter/tasksSlice";


const AddTask = () => {

    

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')

    const dispatch=useDispatch()
  
    const addTask = (e) => {
        e.preventDefault()
        const isEmpty = Object.values({title,description}).every(x => x === null || x === '');
        dispatch(addTaskToList({title,description}))
        setDescription('');
        setTitle('');
    }
  return (
    <section className="my-5">
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Task Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Title" value={title}
         onChange={(e) => setTitle(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Task Description</Form.Label>
        <Form.Control type="text" placeholder="Enter Task Description" value={description}
        onChange={(e) => setDescription(e.target.value)}/>
      </Form.Group>
      <div className="text-end">
        <Button variant="primary" type="submit" onClick={(e) =>addTask(e)}>
          Add Task
        </Button>
      </div>
    </Form>
    </section>
  );
};

export default AddTask;
