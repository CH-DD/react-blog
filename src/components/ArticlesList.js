// Note: 'destructuring' in the ArticlesList argument allows easy access to props passed from 'Home' parent component 

const ArticlesList = ({ articles, title }) => {

    return (  
        
        <section className="articles-list">
            <h3>{ title }</h3>

            {/* cycle through each item in articles array - all must have a unique key eg. id */}
            {articles.map((article) => (
                <article className="article-preview" key={ article.id }>
                    <h2>{ article.title }</h2>
                    <p>By { article.author }</p>
                </article>
            ))}
        </section>
    );
}
 
export default ArticlesList;