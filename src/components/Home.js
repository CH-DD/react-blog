import { useState, useEffect } from "react";
import ArticlesList from "./ArticlesList";


const Home = () => {

    // State: Stores data. 
    // Initial 'reactive' list of articles (this data has now been recreated as a fake local API using 'json-server' package and data/dummy-db.json)
    const [articles, setArticles] = useState([
        { id: 1, author: "Mario", title: "My new website", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        { id: 2, author: "Yoshi", title: "Welcome party!", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
        { id: 3, author: "Mario", title: "Web development top tips", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
    ]);
    // Name value to test useEffect 'dependency array'
    const [name, setName] = useState("Mario");

    // Functionality: Delete an article
    // - 1. Create new list of articles that DO NOT have the same id value as article being deleted. Initial array not mutated.
    // - 2. Pass 'newArticles' as the new 'setArticles' value 
    const handleDelete = (id) => {
        const newArticles = articles.filter(article => article.id !== id);
        setArticles(newArticles);   
    }

    // useEffect: runs a function on every render (passed in as an argument).  ie. when component first loads, and whenever 'state' data changes
    // Common uses - to fetch data, or communicate with auth. service (aka 'side effects')
    // Be careful changing state in here - can create infinite loop
    // To define when exactly the function should be rendered (ie. not every render), include optional 'dependency array' as a second argument. An empty array means first render only.
    useEffect(() => {
        console.log("use effect ran");
    }, []); 


    return (
        <main className="home">
            <div className="content">

                {/* List all articles
                - Pass props into 'ArticlesList' child component: articles array, title, handleDelete function */}
                <ArticlesList 
                    articles={articles} 
                    title="All Articles" 
                    handleDelete={handleDelete} 
                />     

                {/* Mario's articles */}
                <ArticlesList 
                    articles={articles.filter((article) => article.author === "Mario")} 
                    title="Mario's Articles" 
                    handleDelete={handleDelete} 
                />  

                {/* Yoshi's articles  */}
                <ArticlesList 
                    articles={articles.filter((article) => article.author === "Yoshi")} 
                    title="Yoshi's Articles" 
                    handleDelete={handleDelete} 
                />  

            </div>
        </main>
     );
}
 
export default Home;