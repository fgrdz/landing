import { StrictMode } from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Home from './components/home/home.tsx';
import {createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from './components/login/login.tsx';
import SignUpPage from './components/signup/signup.tsx';
import GoogleCallbackPage from './components/googleLogin/googleLoginCallback.tsx';
import ProtectedRoute from './components/protectedRoute/protectedRoute.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
        ]
      },
      {
        path: '/login',
        element: <LoginPage/>
      },
      {
        path: '/register',
        element: <SignUpPage/>
      },
      {
        path: 'auth/callback',
        element: <GoogleCallbackPage/>
      }
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)