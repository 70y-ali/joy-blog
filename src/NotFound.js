import { Link } from "react-router-dom"

const NotFound = () =>{
    return(
        <div className="not-found">
            <p>That page can not be found...</p>
            <Link to=''>back to the homepage</Link>
        </div>
    )
}
export default NotFound