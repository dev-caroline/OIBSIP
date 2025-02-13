import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PendingPage from './Pages/PendingPage'
import CompletedPage from './Pages/CompletedPage'
import Todo from './Pages/Todo'

function App() {
  return (
    <Routes>
      <Route path='/' element={<PendingPage/>}/>
      <Route path='/com' element={<CompletedPage/>}/>
      <Route path='/task' element={<Todo/>}/>
    </Routes>
  )
}

export default App