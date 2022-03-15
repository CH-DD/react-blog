import { useParams } from "react-router";           // to grab article id
import useFetch from "../custom-hooks/useFetch";    // custom hook


const Article = () => {

    // useParams: grab current article id parameter
    const { id } = useParams();

    // Fetch individual article data 
    const { data:article, isLoading, error } = useFetch("http://localhost:8000/articles/" + id);
   

    return (  
        <main className="article-page">

            {/* Loading message */}
            {isLoading && 
                <div id="loading">
                    <h2>
                        <span className="material-icons">sync</span>
                        <span className="text">Loading...</span>
                    </h2>
                </div>
            }

            {/* Error message (if any exist) */}
            {error && 
                <div id="error">
                    <h2>
                        <span className="material-icons">error_outline</span>
                        <span className="text">Oops! { error }</span>
                    </h2>
                    <p>Maybe try again?</p>
                </div>
            }

            {/* article content */}
            { article && (
                <article className="content-area">
                    <h2>{ article.title }</h2>
                    <p className="author">By { article.author }</p>
                    <div className="article-body">{ article.body }</div>
                </article>
            )}

        </main>
    );

}
 
export default Article;