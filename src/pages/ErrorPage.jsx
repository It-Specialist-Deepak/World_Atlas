import React from 'react'
import { useRouteError } from 'react-router-dom'
import '../App.css'

export const ErrorPage = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div>
        <h1>Oops ! An Error occured.</h1>
        {
            error && <p>{error.statusText && error.status}</p>
         
          
        }
    </div>
  )
}

 