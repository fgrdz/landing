import { StrictMode } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './components/home/home.tsx';
import {createBrowserRouter, RouterProvider } from "react-router";
import BlankPage from './blankPage.tsx';

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
        path: '/um',
        element: <BlankPage/>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
