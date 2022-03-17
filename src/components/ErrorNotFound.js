import { Link } from "react-router-dom";

const ErrorNotFound = () => {
    return (  
        <main className="error-page">
            <section className="content-area">
                <div id="error">
                    <h2><span className="material-icons">error_outline</span><span className="text">Sorry! The page you are looking for cannot be found.</span></h2>
                    <p>Maybe try the <Link to="/">homepage</Link>?</p>
                </div>
            </section>
        </main>

    );
}
 
export default ErrorNotFound;