import { StrictMode } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './components/home/home.tsx';
import {createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from './components/login/login.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <LoginPage/>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
