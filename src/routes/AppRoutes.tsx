import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import {MainLayout} from '@layouts/index'

import Home from '@pages/Home';
import Categories from '@pages/Categories';
import Products from '@pages/Products';
import AboutUs from '@pages/AboutUs';
import SignIn from '@pages/SignIn';
import Register from '@pages/Register';
import ErrorRoutes from '@pages/ErrorRoutes';
const AppRoutes = () => {
  const router = createBrowserRouter([
  {
  path:"/",
  element:<MainLayout/>,
  errorElement:<ErrorRoutes/>,
  children:[
    {
      index:true, 
      element:<Home/>
    },
    {
      path:"categories",
      element:<Categories/>
    },
    {
      path:"products/:prefix",
      element:<Products/>,
      loader:({params})=>{
        if (typeof params.prefix !== "string" || !/^[a-z]+$/i.test(params.prefix)) {
          throw new Response("Bad Request",{
            statusText:"Category Not Found",
            status:400,
          });
        }
        return true
      }
    },
    {
      path:"about-us",
      element:<AboutUs/>
    },
    {
      path:"sign-in",
      element:<SignIn/>
    },
    {
      path:"register",
      element:<Register/>
    },
  ]
}
])
  return (
    <RouterProvider router={router}/>
  )

}

export default AppRoutes;