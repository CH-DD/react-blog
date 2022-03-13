// Note: using 'destructuring' in the ArticlesList argument allows easy access to props passed from 'Home' parent component - the 'articles' array, 'title', and 'handleDelete' function. 

const ArticlesList = ({ articles, title, handleDelete }) => {

    return (  
        
        <section className="articles-list">
            <h3>{ title }</h3>

            {/* cycle through each item in articles array - all must have a unique key eg. id */}
            {articles.map((article) => (
                <article className="article-preview" key={ article.id }>
                    <h2>{ article.title }</h2>
                    <p>By { article.author }</p>

                    {/* give button a click event handler */}

                    <button onClick={() => handleDelete(article.id)}><span className="material-icons">delete</span> Delete</button>
                </article>
            ))}
        </section>
    );
}
 
export default ArticlesList;