import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Projects from './Pages/Men';
import App from './App';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Order from './Pages/Order';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      { 
        path: '/', element: <Home />
       },
      {
         path: '/about', element: <About /> 
        },
      { 
        path: '/contact', element: <Contact /> 
      },
      { 
        path: '/projects', element: <Projects /> 
      },
      {
        path: '/men',
        element: <Men/>
      },
      {
        path: '/women',
         element:<Women/>
         },
    
      {
        path: '/order',
         element:<Order/>
         }
    ]

  },

]);

const Router = () => <RouterProvider router={router} />

export default Router;
