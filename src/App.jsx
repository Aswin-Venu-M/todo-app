import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import AddTask from "./components/AddTask";
import ListTask from "./components/ListTask";
import DeletedTasks from "./components/DeletedTasks";
import CompletedTasks from "./components/CompletedTasks";


function App() {
  const [tasks, setTasks] = useState([]); // State to store active tasks
  const [deletedTasks, setDeletedTasks] = useState([]); // State to store deleted tasks

  // Function to handle adding a new task
  const handleAddTask = (newTask) => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask.trim()]);
    }
  };

  // Function to handle deleting a task
  const handleDeleteTask = (index) => {
    const taskToDelete = tasks[index];
    setDeletedTasks([...deletedTasks, taskToDelete]); // Add the deleted task to the deleted tasks list
    setTasks(tasks.filter((_, i) => i !== index)); // Remove the task from the active tasks list
  };

  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to='/'>To-Do App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Add Task</Nav.Link>
                <Nav.Link as={Link} to="/deleted">Deleted Tasks</Nav.Link>
                <Nav.Link as={Link} to="/completed">Completed Tasks</Nav.Link>
              </Nav>
            </Navbar.Collapse> 
          </Container>
        </Navbar>

        {/* Define Routes */}
        <Container className="mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AddTask onAddTask={handleAddTask} />
                  <h2>My Tasks</h2>
                  <hr/>
                  <ListTask tasks={tasks} onDeleteTask={handleDeleteTask} />
                </>
              }
            />
            <Route path="/deleted" element={<DeletedTasks tasks={deletedTasks} />} />
            <Route path="/completed" element={<CompletedTasks/>} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
