import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home/index.tsx';
import About from './pages/about/index.tsx';
import Blogs from './pages/blogs/index.tsx';
import Contact from './pages/contact/index.tsx';
import Services from './pages/services/index.tsx';

const router = createBrowserRouter([
  {
    path: "/TestBlog",
    element: <App/>,
    children:[
      {
        path:"/TestBlog",
        element: <Home/>
      },
      {
        path:"/TestBlog/blogs",
        element: <Blogs/>
      },
      {
        path:"/TestBlog/about",
        element: <About/>
      },
      {
        path:"/TestBlog/contact",
        element: <Contact/>
      },
      {
        path:"/TestBlog/services",
        element: <Services/>
      },
    ]
  },
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
