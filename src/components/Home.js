import { useState, useEffect } from "react";
import ArticlesList from "./ArticlesList";


const Home = () => {

    // State: Stores data. 
    // Initial 'reactive' list of articles. Data has now been recreated as a fake local API using 'json-server' package and data/dummy-db.json
    const [articles, setArticles] = useState(null); // null will be updated when data is fetched 

    // Name value to test useEffect 'dependency array'
    const [name, setName] = useState("Mario");

    // useEffect: fetch articles data from API
    // function only fired once - on initial render (due to empty dependency array)
    useEffect(() => {
        fetch("http://localhost:8000/articles")
            .then(res => {              // get response object 
                return res.json();      // parse json into js object & return a promise
            }) 
            .then(data => {             // get the returned data: as array of objects 
                console.log("Fetched array -->", data);
                setArticles(data);      // update state with the fetched array
            })
    }, []);   


    return (
        <main className="home">
            <div className="content">

                {/* List all articles
                - Use JS 'conditional outputting': code to right of the logical AND operator (&&) is only output if both 'articles' and 'ArticlesList' evaluate to true. ie. 'articles' data has been fetched successfully, and the initial 'null' value is overwritten.
                - Pass props into 'ArticlesList' child component: articles array, title */}
                {articles && <ArticlesList 
                    articles={articles} 
                    title="All Articles"  
                />}

                {/* Mario's articles */}
                {/* <ArticlesList 
                    articles={articles.filter((article) => article.author === "Mario")} 
                    title="Mario's Articles" 
                />   */}

                {/* Yoshi's articles  */}
                {/* <ArticlesList 
                    articles={articles.filter((article) => article.author === "Yoshi")} 
                    title="Yoshi's Articles" 
                />   */}

            </div>
        </main>
     );
}
 
export default Home;