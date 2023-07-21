import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import JobListings from './screens/JobListings';
import {
  RouterProvider,
  createHashRouter
} from "react-router-dom";




const router = createHashRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/joblistings',
    element: <JobListings/>
  }
]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

