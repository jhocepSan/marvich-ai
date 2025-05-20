import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';
import Error from './Pages/Error/Error';
import Home from './Home/Home';
import ForestalPage from './Components/Industries/Components/forestal-page';
import AgriculturaPage from './Components/Industries/Components/agricultura-page';
import ServiciosPublicosPage from './Components/Industries/Components/servicios-publicos-page';
import MineriaEnergiaPage from './Components/Industries/Components/mineria-energia-page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/forestal",
        element: <ForestalPage />,
      },
      {
        path: "/agricultura-regenerativa",
        element: <AgriculturaPage />,
      },
      {
        path: "/servicios-publicos",
        element: <ServiciosPublicosPage />,
      },
      {
        path: "/mineria-energia",
        element: <MineriaEnergiaPage />,
      },
      {
        path:"/contacto",
        element:<h1>hola</h1>
      }
    ],

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
