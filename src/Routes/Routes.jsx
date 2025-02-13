import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import ProjectDetail from "../components/Project/ProjectDetail";


  export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>
    },
        
  ]);