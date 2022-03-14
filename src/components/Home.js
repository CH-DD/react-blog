import { useState, useEffect } from "react";
import ArticlesList from "./ArticlesList";


const Home = () => {

    // State values: 
    // Initial list of articles. Data fetched from fake local API using 'json-server' package and data/dummy-db.json
    const [articles, setArticles] = useState(null); // null will be updated when data is fetched 

    // Loading message whilst fetching data
    const [isLoading, setIsLoading] = useState(true);  // initial value: true

    // Error handling
    const [error, setError] = useState(null);


    // useEffect: fetch articles data from API
    // function only fired once - on initial render (due to empty dependency array)
    useEffect(() => {

        // temporarily wrap fetch in 'setTimeout' to simulate a real web server
        setTimeout(() => {  
            fetch("http://localhost:8000/articles")

                .then(response => {         // get response object 
                    if(!response.ok) {      // catch data request errors
                        return setError("We could not find the thing you wanted.");
                    }
                    return response.json(); // parse json --> object & return a promise
                }) 
                .then(data => {             // get returned data: array of objects 
                    setArticles(data);      // update state with the fetched array
                    setIsLoading(false);    // update loading message state
                })
                .catch((err) => {           // catch network connection errors
                    // set error message
                    setError("We seem to be experiencing connection issues.");
                    // remove loading message: no longer required
                    setIsLoading(false);
                })
                
        }, 1000); // time delay in ms

    }, []);   


    return (
        <main className="home">
            <div className="content">

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

                {/* List articles
                - 'Conditional template': code to right of the logical AND (&&) is only output if both 'articles' and 'ArticlesList' evaluate to true. ie. 'articles' data has been fetched and the initial 'null' value is overwritten.
                - Pass props into 'ArticlesList' child component: articles array, title */}
                {articles && <ArticlesList articles={articles} title="All Articles" />}
            </div>
        </main>
     );
}
 
export default Home;