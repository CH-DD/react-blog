import { useParams } from "react-router";

const Article = () => {

    // useParams: grab current article id parameter
    const { id } = useParams();

    return (  
        <main className="article">
            <h2>An article with id '{id}'</h2>
        </main>
    );
}
 
export default Article;