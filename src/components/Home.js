import useFetch from "../custom-hooks/useFetch";    // custom hook
import ArticlesList from "./ArticlesList";          // component


const Home = () => {

    // Fetch articles data 
    // Use custom 'useFetch' hook: pass in custom url & rename returned 'data' variable to be 'articles'
    const { data: articles, isLoading, error } = useFetch("http://localhost:8000/articles");

    // Render items on page
    return (
        <main className="home">

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

            {/* Loading message */}
            {isLoading && 
                <div id="loading">
                    <h2>
                        <span className="material-icons">sync</span>
                        <span className="text">Loading...</span>
                    </h2>
                </div>
            }

            <div className="content">

                {/* List articles
                - 'Conditional template': code to right of the logical AND (&&) is only output if both 'articles' and 'ArticlesList' evaluate to true. ie. 'articles' data has been fetched and the initial 'null' value is overwritten.
                - Pass props into 'ArticlesList' child component: articles array, title */}
                {articles && <ArticlesList articles={articles} title="All Articles" />}
            </div>
        </main>
     );
}
 
export default Home;