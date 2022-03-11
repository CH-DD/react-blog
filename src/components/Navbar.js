const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1 className="logo">
                <strong>Blog</strong>Off
            </h1>
            <div className="links">
                <a href="/">Home</a>
                <a className="new-post button" href="/create" title="Create a new post"><span className="material-icons">create</span> New</a>
            </div>
        </nav>
    );
}
 
export default Navbar;