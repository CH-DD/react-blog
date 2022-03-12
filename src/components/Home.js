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

                {/* pass the articles data into a reusable 'ArticlesList' child component using props - as an object with key of 'articles' */}
                <ArticlesList articles={articles} title="All Articles" />     

            </div>
        </main>
     );
}
 
export default Home;