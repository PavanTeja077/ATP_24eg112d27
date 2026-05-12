import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './components/RootLayout'
import Home from './components/Home'
import CreateEmp from './components/CreateEmp'
import EditEmployee from './components/EditEmployee'
import ListOfEmps from './components/ListOfEmps'
import Employee from './components/Employee'
import EditCounter4 from './components/EditCounter4'

const routerObj = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "create-emp", element: <CreateEmp /> },
      { path: "list", element: <ListOfEmps /> },
      { path: "edit/:id", element: <EditEmployee /> },
      { path: "employee", element: <Employee /> },
      { path: "edit-counter4", element: <EditCounter4 /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={routerObj} />
  )
}

export default App