import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CompletedPage() {
  const navigate = useNavigate();
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const storedCompletedTasks = JSON.parse(localStorage.getItem('completedTasks')) || [];
    setCompletedTasks(storedCompletedTasks);
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

  function deleteTask(index) {
    const updatedTasks = completedTasks.filter((_, i) => i !== index);
    setCompletedTasks(updatedTasks);
    localStorage.setItem('completedTasks', JSON.stringify(updatedTasks));
  }

  return (
    <div className='col-lg-8 col-11 mx-auto mt-5 d-flex border border-3 border-secondary rounded-3 p-4 lol'>
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
        <button className="fs-5 fw-bold mt-5 btn w-100 text-start" onClick={addTask}>Add New Task</button>
        <button className="mt-5 fs-5 fw-bold btn w-100 p-2 text-start" onClick={pend}>Pending Tasks</button>
        <button className="fs-5 fw-bold mt-5 btn bg-white w-100 text-start" onClick={com}>Completed Tasks</button>
        <button className="fs-5 fw-bold mt-5 btn w-100 text-start">Settings</button>
      </div>

      <div className="col-9 ms-3">
        <h1 className='text-decoration-underline fs-4 fw-bold text-center'>Completed Tasks</h1>
        
        {completedTasks.length > 0 ? (
          <div className="table-responsive">
            <table className="table table-bordered mt-4">
              <thead className="bg-secondary text-white table-warning">
                <tr>
                  <th className="px-lg-4 px-3 py-2">S/N</th>
                  <th className="px-lg-4 px-3 py-2">Project Name</th>
                  <th className="px-lg-4 px-3 py-2">Start Date</th>
                  <th className="px-lg-4 px-3 py-2">End Date</th>
                  <th className="px-lg-4 px-3 py-2">Priority</th>
                  <th className="px-lg-4 px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-light">
                {completedTasks.map((task, index) => (
                  <tr key={index}>
                    <td className="px-lg-4 px-3 py-2">{index + 1}</td>
                    <td className="px-lg-4 px-3 py-2 text-capitalize">{task.proj}</td>
                    <td className="px-lg-4 px-3 py-2">{task.sDate}</td>
                    <td className="px-lg-4 px-3 py-2">{task.eDate}</td>
                    <td className="px-lg-4 px-3 py-2">{task.priority}</td>
                    <td className="px-lg-4 px-3 py-2">
                      <button className="btn btn-danger mx-2" onClick={() => deleteTask(index)}>
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className='fs-3 text-center mt-5 text-secondary fst-italic'>No Completed Task Yet!</p>
        )}
      </div>
    </div>
  );
}

export default CompletedPage;
