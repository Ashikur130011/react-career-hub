import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import JobDetails from './Components/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        loader: ( () => fetch('/jobs.json')),
        element: <AppliedJobs/>,
      },
      {
        path: "/job/:id",
        loader:( () => fetch("/jobs.json")),
        element: <JobDetails/>,
      },
    ],
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
