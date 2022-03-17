import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1 className="logo">
                <strong>console</strong>.blog
            </h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create-article" className="new-post button" title="Create a new post"><span className="material-icons">create</span> New</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;