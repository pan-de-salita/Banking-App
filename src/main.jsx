import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Login from './routes/Login';
import Root from './routes/Root';
import CreateUser from './routes/CreateUser';
import Deposit from './routes/Deposit';
import './index.css'

const BankingApp = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/root',
    element: <Root />,
    children: [
      {
        index: true,
        element: <CreateUser />,
      },
      {
        path: 'create-user',
        element: <CreateUser />,
      },
      {
        path: 'deposit',
        element: <Deposit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={BankingApp} />
  </React.StrictMode>,
)
