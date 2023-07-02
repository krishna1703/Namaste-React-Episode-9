 import { useRouteError} from "react-router-dom"



const Error = () => {
     const err =  useRouteError();
     console.log(err)


  return (
    <div>
    <h1> welcome to  {err.status} {err.statusText} page</h1>
 
 
    </div>
   
  )
}

export default Error;