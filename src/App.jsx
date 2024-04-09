import { useState } from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'

const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout />,
    children:[
      {
        index:true,
        element: <Home />
      },
      {
        path:'/cart',
        element: <Cart />
      }
    ]
  }
])

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
