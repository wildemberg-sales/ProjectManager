import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import App from './App.jsx'
import './index.css'
import Header from './components/header.jsx';
import Project from './pages/project.jsx';

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header/>
        <Outlet/>
      </>
    ),
    children:[
      {
        path: '/',
        element: <App/>
      },
      {
        path: ':idProject',
        element: <Project/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider
      router={router}
    />
  </QueryClientProvider>
)