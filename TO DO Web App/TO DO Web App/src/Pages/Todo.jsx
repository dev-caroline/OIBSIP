// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// function Todo() {
//     const [tasks, setTasks] = useState([]);
//     const navigate = useNavigate()

//     function addTask() {
//         navigate('/task')
//     }
//     function pend() {
//         navigate('/')
//     }
//     function com() {
//         navigate('/com')
//     }

//     const saveIt = () => {
//         const proj = document.getElementById('proj')
//         const sDate = document.getElementById('sDate')
//         const eDate = document.getElementById('eDate')
//         const priority = document.getElementById("priority")
//         const errorMsg = document.getElementById('errorMsg')

//         let task = {proj, sDate, eDate, priority}
//         if (proj.value === '' || eDate.value === '' || sDate.value === '') {
//             errorMsg.style.display = 'block'
//         } else {
//             errorMsg.style.display = 'none'
//             const task = {
//                 proj: proj.value,
//                 sDate: sDate.value,
//                 eDate: eDate.value,
//                 priority: priority.value
//             };

//             setTasks([...tasks, task]); // Update state with new task
//             proj.value = ''; // Clear input fields
//             sDate.value = '';
//             eDate.value = '';
//             priority.value = 'High';
//         };
//         }
//     }


//     return (
//         <div className='col-lg-8 col-11 mx-auto mt-5 d-flex border border-3 border-secondary rounded-3 p-4 lol'>

//             <div className="col-3 p-3 rounded-3 bg-warning bg-opacity-50">
//                 <div className="d-flex justify-content-between">
//                     <p>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
//                             <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
//                             <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
//                         </svg>
//                     </p>
//                     <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
//                         <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
//                         <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
//                         <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
//                     </svg></p>
//                 </div>
//                 <button className="fs-5 fw-bold mt-5 btn bg-light w-100 text-start" onClick={addTask}>Add New Task</button> <br />
//                 <button className="mt-5 fs-5 fw-bold btn w-100 p-2 text-start" onClick={pend}>Pending Tasks</button>
//                 <button className="fs-5 fw-bold mt-5 btn w-100 text-start" onClick={com}>Completed Tasks</button>
//                 <button className="fs-5 fw-bold mt-5 btn w-100 text-start">Settings</button>
//             </div>

//             <div className="col-9 ms-3">
//                 <h1 className='text-center'>Fix up your schedule🤗</h1>
//                 <p className='alert alert-danger p-2 fw-bold' style={{ display: 'none' }} id='errorMsg'>Kindly input your Project Name and Deadline !</p>
//                 <p className='fw-bold fs-5'>Project Name</p>
//                 <input type="text" className=' fw-bold form-control text-capitalize' id='proj' />
//                 <p className='mt-3 fw-bold fs-5'>Start Date</p>
//                 <input type="date" className='fw-bold form-control' id='sDate' /> <br />
//                 <p className='mt-3 fw-bold fs-5'>End Date</p>
//                 <input type="date" className='fw-bold form-control' id='eDate' /> <br />
//                 <p className='mt-3 fw-bold fs-5'>Priority</p>
//                 <select name="" id="priority" className='fw-bold'>
//                     <option value="High" className='fw-bold'>High🥵</option>
//                     <option value="Medium" className='fw-bold'>Medium🫥</option>
//                     <option value="Low" className='fw-bold'>Low🥶</option>

//                 </select>
//                 <div className='d-flex justify-content-end'>
//                     <button className='btn bg-warning bg-opacity-50 fw-bold px-5 py-2' onClick={saveIt}>Save</button>
//                 </div>
//             </div>
//         </div>

//     )
// }

// export default Todo




import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Load existing tasks from localStorage
        const storedTasks = JSON.parse(localStorage.getItem('pendingTasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        // Save tasks to localStorage whenever they change
        localStorage.setItem('pendingTasks', JSON.stringify(tasks));
    }, [tasks]);

    function addTask() {
        navigate('/task');
    }

    function pend() {
        navigate('/');
    }

    function com() {
        navigate('/com');
    }

    const saveIt = () => {
        const proj = document.getElementById('proj');
        const sDate = document.getElementById('sDate');
        const eDate = document.getElementById('eDate');
        const priority = document.getElementById('priority');
        const errorMsg = document.getElementById('errorMsg');

        if (proj.value.trim() === '' || eDate.value === '' || sDate.value === '') {
            errorMsg.style.display = 'block';
        } else {
            errorMsg.style.display = 'none';
            const task = {
                id: Date.now(),
                proj: proj.value,
                sDate: sDate.value,
                eDate: eDate.value,
                priority: priority.value
            };

            setTasks([...tasks, task]);

            // Clear input fields after saving
            proj.value = '';
            sDate.value = '';
            eDate.value = '';
            priority.value = 'High';

            alert('Task successfully added to pending tasks!');
        }
    };

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
                    <p><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z" />
                        <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z" />
                        <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z" />
                    </svg></p>
                </div>
                <button className="fs-5 fw-bold mt-5 btn bg-light w-100 text-start" onClick={addTask}>Add New Task</button> <br />
                <button className="mt-5 fs-5 fw-bold btn w-100 p-2 text-start" onClick={pend}>Pending Tasks</button>
                <button className="fs-5 fw-bold mt-5 btn w-100 text-start" onClick={com}>Completed Tasks</button>
                <button className="fs-5 fw-bold mt-5 btn w-100 text-start">Settings</button>
            </div>

            <div className="col-9 ms-3">
                <h1 className='text-center'>Fix up your schedule🤗</h1>
                <p className='alert alert-danger p-2 fw-bold' style={{ display: 'none' }} id='errorMsg'>Kindly input your Project Name and Deadline !</p>
                <p className='fw-bold fs-5'>Project Name</p>
                <input type="text" className=' fw-bold form-control text-capitalize' id='proj' />
                <p className='mt-3 fw-bold fs-5'>Start Date</p>
                <input type="date" className='fw-bold form-control' id='sDate' /> <br />
                <p className='mt-3 fw-bold fs-5'>End Date</p>
                <input type="date" className='fw-bold form-control' id='eDate' /> <br />
                <p className='mt-3 fw-bold fs-5'>Priority</p>
                <select name="" id="priority" className='fw-bold'>
                    <option value="High" className='fw-bold'>High🥵</option>
                    <option value="Medium" className='fw-bold'>Medium🫥</option>
                    <option value="Low" className='fw-bold'>Low🥶</option>
                </select>
                <div className='d-flex justify-content-end'>
                    <button className='btn bg-warning bg-opacity-50 fw-bold px-5 py-2' onClick={saveIt}>Save</button>
                </div>
            </div>
        </div>
    );
}

export default Todo;





