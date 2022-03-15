import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1 className="logo">
                <strong>Blog</strong>Off
            </h1>
            <div className="links">
                <Link to="/">All Articles</Link>
                <Link to="/create" className="new-post button" title="Create a new post"><span className="material-icons">create</span> New</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;