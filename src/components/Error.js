import { useRouteError } from "react-router-dom";


const Route=()=>{
    const err=useRouteError();

    return <div>
        <h1>Oops!!!</h1>
        <h3>Something Went Wrong</h3>
        <h4>{err.data}</h4>
        <h4>{err.status} not found</h4>
    </div>
}
export default Route;