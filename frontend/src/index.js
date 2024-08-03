import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from './pages/home/home';
import Project from './pages/project/project';
import Projects from './pages/projects/projects';
import Users from './pages/users/users';
import Login from './pages/login/login';

import Sidebar from './components/sidebar/sidebar';
import ProtectedRoute from './components/protectedRoute/protectedRoute'
import { Provider } from 'react-redux';
import store from './store/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <div className="general">
          <Sidebar />
          <div className="center">
            <Outlet />
          </div>
        </div>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home /> ,
      },
      {
        path: "/projects",
        element: <Projects /> ,
      },
      {
        path: "/project/:id",
        element: <Project /> ,
      },
      {
        path: "/users",
        element: <Users /> 
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
