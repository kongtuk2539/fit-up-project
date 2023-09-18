import React from 'react'
import App from "./App";
import ReactDOM from 'react-dom/client'
import './index.css'
/* import { createBrowserRouter, RouterProvider } from 'react-router-dom' */


/* const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    exact: true
  }
]) */

ReactDOM.createRoot(document.getElementById('root')).render(
  /* <RouterProvider router={router}></RouterProvider>, */
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
