import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/222180551',
        element: <div>TES!</div>
      },
      {
        path: '/214116317',
        element: <div>Ini Evan</div>
      },
      {
        path: '/222180563',
        element: <div>Hello 🐣!!</div>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
