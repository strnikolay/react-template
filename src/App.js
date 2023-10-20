import {createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';

//import About from "./pages/about/about";
import Main  from './pages/main/main';
//import ErrorPage from "./pages/404/404";






function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      //errorElement: <ErrorPage />,
    },
    /*{
      path: "/about",
      element: <About />,
    },*/
  ]);



  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App; 
