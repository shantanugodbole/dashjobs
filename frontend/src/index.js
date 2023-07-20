import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignUp from './screens/signup';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  }
]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

