import './App.css'

import React from "react";
import Home from "./assets/Component-2/Home";
import About from "./assets/Component-2/About";
import Dashboard from "./assets/Component-2/Dashboard";
import Navbar from "./assets/Component-2/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ParamComp from './assets/Component-2/ParamComp';

const router = createBrowserRouter([
  {
    path: "/Home",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/About",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <div>
        <Navbar />
        <Dashboard />
        
      </div>
    ),
  },
  {
    path: "/student/:id",
    element:
    <div>
      <Navbar />
      <ParamComp />
    </div>
    
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
