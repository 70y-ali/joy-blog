import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
            <h1>JOY</h1>
            <div className="links"></div>
            <Link to="/">HOME</Link>
            <Link to="/us">US</Link>
            <Link to="/futures">FUTURES</Link>
            <Link to="/contact">CONTACT</Link>
            {/* style{{}} it is dynamic programming js */}
            <Link to="/create" style={{
                color: "white",
                backgroundColor: "#f1356d",
                borderRadius: "8px"
            }}>New Blog</Link>
            
        </nav>
    );
}
export default Navbar