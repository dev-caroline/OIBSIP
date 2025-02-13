import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function PendingPage() {
  const navigate = useNavigate();
  const [pendingTasks, setPendingTasks] = useState([]);

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("pendingTasks")) || [];
    setPendingTasks(storedTasks);
  }, []);

  // Function to add a new task
  function addTask() {
    const newTask = {
      proj: prompt("Enter Project Name:"),
      sDate: prompt("Enter Start Date:"),
      eDate: prompt("Enter End Date:"),
      priority: prompt("Enter Priority Level:")
    };

    if (newTask.proj && newTask.sDate && newTask.eDate && newTask.priority) {
      const updatedTasks = [...pendingTasks, newTask];
      setPendingTasks(updatedTasks);
      localStorage.setItem("pendingTasks", JSON.stringify(updatedTasks));
    }
  }

  function pend() {
    navigate("/");
  }

  function com() {
    navigate("/com");
  }

  function settings() {
    navigate("/settings");
  }

  // Mark task as complete and move to completedTasks
  function markAsComplete(index) {
    const updatedTasks = [...pendingTasks];
    const completedTask = updatedTasks.splice(index, 1)[0];

    // Get existing completed tasks and update
    const existingCompletedTasks =
      JSON.parse(localStorage.getItem("completedTasks")) || [];
    const updatedCompletedTasks = [...existingCompletedTasks, completedTask];

    // Save to localStorage
    localStorage.setItem("completedTasks", JSON.stringify(updatedCompletedTasks));
    localStorage.setItem("pendingTasks", JSON.stringify(updatedTasks));

    setPendingTasks(updatedTasks);
  }

  // Edit a task
  function editTask(index) {
    const taskToEdit = pendingTasks[index];
    const newProjectName = prompt("Edit Project Name:", taskToEdit.proj);
    if (newProjectName !== null && newProjectName.trim() !== "") {
      const updatedTasks = [...pendingTasks];
      updatedTasks[index].proj = newProjectName;
      setPendingTasks(updatedTasks);
      localStorage.setItem("pendingTasks", JSON.stringify(updatedTasks));
    }
  }

  // Delete a task
  function deleteTask(index) {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updatedTasks = pendingTasks.filter((_, i) => i !== index);
      setPendingTasks(updatedTasks);
      localStorage.setItem("pendingTasks", JSON.stringify(updatedTasks));
    }
  }

  return (
    <div className="col-lg-8 col-11 mx-auto mt-5 d-flex border border-3 border-secondary rounded-3 p-4 lol shadow">
      <div className="col-3 p-3 rounded-3 bg-warning bg-opacity-50">
        <button className="fs-5 fw-bold mt-5 btn w-100 text-start" onClick={addTask}>
          Add New Task
        </button>
        <br />
        <button className="mt-5 fs-5 fw-bold btn bg-light w-100 p-2 text-start" onClick={pend}>
          Pending Tasks
        </button>
        <button className="fs-5 fw-bold mt-5 btn w-100 text-start" onClick={com}>
          Completed Tasks
        </button>
        <button className="fs-5 fw-bold mt-5 btn w-100 text-start" onClick={settings}>
          Settings
        </button>
      </div>

      <div className="col-9 ms-3">
        <h1>Welcome User👋</h1>
        <button
          className="fs-5 p-2 mt-4 rounded-3 form-control fw-bold bg-warning bg-opacity-50"
          onClick={addTask}
        >
          + &nbsp; &nbsp; Add New Task
        </button>
        <table className="mt-5 mx-auto table table-bordered">
          <thead className="table-warning">
            <tr>
              <th className="px-lg-5 px-3">S/N</th>
              <th className="px-lg-5 px-3">Project Name</th>
              <th className="px-lg-5 px-3">Start Date</th>
              <th className="px-lg-5 px-3">End Date</th>
              <th className="px-lg-5 px-3">Priority</th>
              <th className="px-lg-5 px-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {pendingTasks.length > 0 ? (
              pendingTasks.map((task, index) => (
                <tr key={index}>
                  <td className="px-lg-5 px-3">{index + 1}</td>
                  <td className="px-lg-5 px-3">{task.proj}</td>
                  <td className="px-lg-5 px-3">{task.sDate}</td>
                  <td className="px-lg-5 px-3">{task.eDate}</td>
                  <td className="px-lg-5 px-3">{task.priority}</td>
                  <td className="px-lg-5 px-3 d-flex gap-2">
                    <button className="btn btn-sm btn-primary" onClick={() => editTask(index)}>
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteTask(index)}>
                      <i className="bi bi-trash"></i>
                    </button>
                    <button className="btn btn-sm btn-success" onClick={() => markAsComplete(index)}>
                      <i className="bi bi-check-circle"></i>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="fs-3 text-center mt-5 text-secondary fst-italic">
                  No Task Added yet!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PendingPage;
