import { useParams } from "react-router";           // to grab article id
import useFetch from "../utils/useFetch";           // custom hook
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../utils/PageTitle";

const Article = () => {

    // useParams: grab current article id parameter
    const { id } = useParams();

    // useNavigate: to access navigation history & redirect after deleting article
    const navigate = useNavigate();

    // Fetch individual article data 
    const { data: article, isLoading, error } = useFetch("http://localhost:8000/articles/" + id);

    // Delete an article on button click
    const handleClick = () => {

        fetch("http://localhost:8000/articles/" + article.id, {
            method: "DELETE"
        }).then(() => { 
            // when promise returned 
            navigate("/");  // redirect to homepage
        })
    }

    // Set page title - after article data has been fetched. Otherwise could return null for article.title and cause error.
    article && (PageTitle( article.title + " | console.blog"));
   
 
    return (  
        <main className="article-page">

            {/* Loading message */}
            {isLoading && 
                <div id="loading">
                    <h2><span className="material-icons">sync</span><span className="text">Loading...</span></h2>
                </div>
            }

            {/* Error message (if any exist) */}
            {error && 
                <div id="error">
                    <h2><span className="material-icons">error_outline</span><span className="text">Oops! { error }</span></h2>
                    <p>Maybe try again?</p>
                </div>
            }

            {/* article content */}
            { article && (
                <article className="content-area">
                    <h1>{ article.title }</h1>
                    <p className="author">By { article.author }</p>
                    <div className="article-body">{ article.body }</div>
                    <button className="delete" onClick={ handleClick }>Delete</button>
                </article>
            )}

        </main>
    );

}
 
export default Article;