import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PendingPage() {
  const navigate = useNavigate();
  const [pendingTasks, setPendingTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('pendingTasks')) || [];
    setPendingTasks(storedTasks);
  }, []);

  function addTask() {
    navigate('/task');
  }

  function pend() {
    navigate('/');
  }

  function com() {
    navigate('/com');
  }

  return (
    <div className='col-lg-8 col-11 mx-auto mt-5 d-flex border border-3 border-secondary rounded-3 p-4 lol shadow'>
      <div className="col-3 p-3 rounded-3 bg-warning bg-opacity-50">
        <div className="d-flex justify-content-between">
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
              <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
            </svg>
          </p>
          <p>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
              <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
            </svg>
          </p>
        </div>
        <button className="fs-5 fw-bold mt-5 btn w-100 text-start" onClick={addTask}>Add New Task</button> <br />
        <button className="mt-5 fs-5 fw-bold btn bg-light w-100 p-2 text-start" onClick={pend}>Pending Tasks</button>
        <button className="fs-5 fw-bold mt-5 btn w-100 text-start" onClick={com}>Completed Tasks</button>
        <button className="fs-5 fw-bold mt-5 btn w-100 text-start">Settings</button>
      </div>

      <div className="col-9 ms-3">
        <h1>Welcome User👋</h1>
        <button className="fs-5 p-2 mt-4 rounded-3 form-control fw-bold bg-warning bg-opacity-50" onClick={addTask}>
          + &nbsp; &nbsp; Add New Task
        </button>
        <table className="mt-5 mx-auto">
          <thead>
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
                  <td className="px-lg-5 px-3">
                    <button className="btn btn-success">Complete</button>
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