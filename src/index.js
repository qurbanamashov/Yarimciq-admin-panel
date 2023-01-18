import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './Page/Add/Add';
import Detail from './Page/Detail/Detail';
import Home from './Page/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/detail/:id",
    element: <Detail/>,
  },
  {
    path: "/add",
    element: <Add/>,
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


