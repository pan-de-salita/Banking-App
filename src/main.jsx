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
      {
        path: 'user-list',
        element: <ListOfUsers />,
        errorElement: <div>Page not found</div>,
      },
      {
        path: 'get-balance',
        element: <GetBalance />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={BankingApp} />
    <ToastContainer />
  </React.StrictMode>,
)
