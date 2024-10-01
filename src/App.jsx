import React from 'react'

import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import { AppLayout } from './components/Layout/AppLayout'
import { About } from './pages/About' 
import { Contact } from './pages/Contact'
import { Country } from './pages/Country'
import { Home } from './pages/Home'
import { ErrorPage } from './pages/ErrorPage'
import { CountryDetails } from './components/Layout/CountryDetails';


const router = createBrowserRouter([
  {
 path:"/",
 element: <AppLayout /> ,
 errorElement: <ErrorPage/>,
 children:[ 
  {
  path:"/",
  element: <Home /> ,
},
{
  path:"contact",
  element: <Contact /> ,
},
{
  path:"about",
  element: <About /> ,
},
{
  path:"country",
  element: <Country /> ,
},
{
  path:"country/:id",
  element: <CountryDetails /> ,
},
 ]
  },
 
])
function App() {
    return <RouterProvider router={router}> </RouterProvider>
    
}

export default App