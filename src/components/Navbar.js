import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">

            <Link to="/" className="logo" title="Go to homepage">
                <h1><strong>console</strong>.blog</h1>
            </Link>

            <div className="links">
                <Link to="/" className="logo" title="Go to homepage">
                    Home
                </Link>

                <Link to="/create-article" className="new-post button" title="Create a new post">
                    <span className="material-icons">create</span> New
                </Link>
            </div>
        </nav>
    );
}
 
export default Navbar;