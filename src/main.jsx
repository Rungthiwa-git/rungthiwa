import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './constants/Home.jsx'
import AboutMe from './constants/AboutMe.jsx'
import Experience from './constants/Experience.jsx'

const router= createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
  path: "AboutMe",
  element: <AboutMe/>
  },
  {
  path: "Experience",
  element: <Experience/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
