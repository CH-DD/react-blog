import { useState } from "react";
import ArticlesList from "./ArticlesList";

// create a 'reactive' list of blog posts using useState
const Home = () => {

const [articles, setArticles] = useState([
    { id: 1, author: "Mario", title: "My new website", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    { id: 2, author: "Yoshi", title: "Welcome party!", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    { id: 3, author: "Mario", title: "Web development top tips", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
]);

    return (
        <main className="home">
            <div className="content">

                {/* List all articles
                - Pass props into 'ArticlesList' child component: articles array, title */}
                <ArticlesList 
                    articles={articles} 
                    title="All Articles" 
                />     

                {/* Mario's articles 
                - Pass props: filtered articles array (returned as new array), new title */}
                <ArticlesList 
                    articles={articles.filter((article) => article.author === "Mario")} 
                    title="Mario's Articles" 
                />  

                {/* Yoshi's articles 
                - Pass props: filtered articles array (returned as new array), new title */}
                <ArticlesList 
                    articles={articles.filter((article) => article.author === "Yoshi")} 
                    title="Yoshi's Articles" 
                />  

            </div>
        </main>
     );
}
 
export default Home;