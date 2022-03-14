import { useState, useEffect } from "react";
import ArticlesList from "./ArticlesList";


const Home = () => {

    // State: 
    // Initial 'reactive' list of articles. Data fetched from fake local API: using 'json-server' package and data/dummy-db.json
    const [articles, setArticles] = useState(null); // null will be updated when data is fetched 

    // Loading message whilst fetching data
    const [isLoading, setIsLoading] = useState(true);  // initial value: true

    // useEffect: fetch articles data from API
    // function only fired once - on initial render (due to empty dependency array)
    useEffect(() => {

        // temporarily wrap fetch in 'setTimeout' to simulate a real web server
        setTimeout(() => {  

            fetch("http://localhost:8000/articles")
            .then(res => {              // get response object 
                return res.json();      // parse json into js object & return a promise
            }) 
            .then(data => {             // get the returned data: as array of objects 
                console.log("Fetched array -->", data);
                setArticles(data);      // update state with the fetched array
                setIsLoading(false);    // update loading message state
            })

        }, 1000); // time delay in ms

    }, []);   


    return (
        <main className="home">
            <div className="content">
                {/* Loading message */}
                {isLoading && 
                    <div className="loading">
                        <span className="material-icons">sync</span>
                        <span className="text">Loading...</span>
                    </div>
                }

                {/* List all articles
                - 'Conditional template': code to right of the logical AND (&&) is only output if both 'articles' and 'ArticlesList' evaluate to true. ie. 'articles' data has been fetched and the initial 'null' value is overwritten.
                - Pass props into 'ArticlesList' child component: articles array, title */}
                {articles && <ArticlesList articles={articles} title="All Articles" />}
            </div>
        </main>
     );
}
 
export default Home;