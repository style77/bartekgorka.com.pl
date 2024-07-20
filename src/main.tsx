import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './Contact.tsx';

document.title = "Bartek Górka"
document.querySelector('link[rel="icon"]')?.remove()

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/contact',
    element: <Contact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
