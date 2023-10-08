import React from 'react'
import App from "./App";
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Sidebar from './components/sidebar-ham/Sidebar';
import Hamber from './components/sidebar-ham/Hamber';
import Sideham from './components/sidebar-ham/Sideham';
import Card from './components/activitycard/Card';
import Circle from './components/circle/Circle';
import Rightsection from './components/activitycard/Rightsection';
import ActivityDialog from './components/activityDialog/ActivityDialog';
import Chart from './components/bar-chart/Chart';
import Login from './viewpage/Login';
import Dashboard from './viewpage/Dashboard';
import Signup1 from './components/signup/Signup1';
import Signup2 from './components/signup/Signup2';
import Dashboardpages from './Pages/Dashboardpages';


const router = createBrowserRouter([
  {
    path: '/sidebar',
    element: <Sidebar />,
    exact: true
  },
  {
    path: '/hamber',
    element: <Hamber />,
    exact: true
  },
  {
    path: '/sideham',
    element: <Sideham />,
    exact: true
  },
  {
    path: '/card',
    element: <Card />,
    exact: true
  },
  {
    path: '/circle',
    element: <Circle />,
    exact: true
  },
  {
    path: '/activitydialog',
    element: <ActivityDialog />,
    exact: true
  },
  {
    path: '/rightsection',
    element: <Rightsection />,
    exact: true
  },
  {
    path: '/chart',
    element: <Chart />,
    exact: true
  },
  {
    path: '/login',
    element: <Login />,
    exact: true
  },
  {
    path: '/signup',
    element: <Signup2 />,
    exact: true
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    exact: true
  }, {
    path: '/bank',
    element: <Dashboardpages />,
    exact: true
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
)
