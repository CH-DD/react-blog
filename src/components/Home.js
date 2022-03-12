import { useState } from "react";

// create a 'reactive' list of blog posts using useState

const Home = () => {

const [articles, setArticles] = useState([
    { id: 1, author: "Mario", title: "My new website", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    { id: 2, author: "Yoshi", title: "Welcome party!", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},
    { id: 3, author: "Mario", title: "Web development top tips", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
]);

    return (
        <main className="home">
            <section className="content">
                {/* cycle through each item in articles array - all must have a unique key ed. id
                */}

                {articles.map((article) => (
                    <article className="article-preview" key={ article.id }>
                        <h2>{ article.title }</h2>
                        <p>By { article.author }</p>
                    </article>
                ))}
            </section>
        </main>
     );
}
 
export default Home;