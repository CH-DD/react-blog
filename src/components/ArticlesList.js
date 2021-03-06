import { Link } from "react-router-dom";

// Note: 'destructuring' in the ArticlesList argument allows access to props passed from 'Home' parent component 
const ArticlesList = ({ articles, title }) => {

    return (  
        <>
            <section className="articles-list">
                
                {/* List each article in the array */}
                {articles.map((article) => (

                    <Link 
                        key={ article.id }
                        to={ `/articles/${article.id}` } 
                        className="article-preview" 
                        title="Read the article"
                    >
                        <article>
                            <h2>{ article.title }</h2>
                            <p className="author">By { article.author }</p>
                       
                        </article>
                    </Link>

                ))}
            </section>
        </>
    );
}
 
export default ArticlesList;