import { useState } from "react";  
import { useNavigate } from "react-router-dom";
import { PageTitle } from "../utils/PageTitle";

const CreateArticle = () => {

    // Set page title
    PageTitle("New article | console.blog");

    // State: for form input values
    const [ title, setTitle ] = useState("");           // initially empty
    const [ body, setBody ] = useState("");             // initially empty
    const [ author, setAuthor ] = useState("Chris");    // inc. default value

    // Loading message whilst posting article & waiting for submission
    const [isLoading, setIsLoading] = useState(false);  // initial value: true

    // useNavigate: access navigation history & redirect after form submission
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (event) => {

        // prevent default action: page refresh when button is pressed
        event.preventDefault();

        // create a new article object. note: json-server automatically generates id.
        const article = { title, body, author };

        // set loading status during submission
        setIsLoading(true);

        // make post request (using json-server). arguments: 1. url. 2. request details.
        fetch("http://localhost:8000/articles", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(article)  // convert object to json for the server

        }).then(() => {  // async function when promise returned & posting is complete
            setIsLoading(false);    // set loading status
            navigate("/");          // redirect to homepage 
        })      

    }

    return (  
        <main className="create-article">
            <section className="content-area">
                <h1>Add new article</h1>

                {/* onSubmit event: fired automatically when a form submit button in pressed. Attach it to a function. */}
                <form onSubmit={ handleSubmit }>
                    <label>Title </label>
                    <input 
                        type="text"
                        placeholder="Enter a title..."
                        required
                        // update state value as text is input (2 way binding)
                        value={ title }
                        onChange={(event) => setTitle(event.target.value)}
                    />

                    <label>Body</label>
                    <textarea 
                        placeholder="Enter your text..."
                        required
                        // update state value as text is input
                        value={ body }
                        onChange={(event) => setBody(event.target.value)}
                    ></textarea>

                    <label>Author </label>
                    <select
                        // update state value as option is selected
                        value={ author }
                        onChange={(event) => setAuthor(event.target.value)}
                    >
                        <option value="Chris">Chris</option>
                        <option value="Guest">Guest</option>
                    </select>

                    {/* show different buttons depending on submission status */}
                    { !isLoading && <button> 
                        <span className="material-icons">publish</span> Publish
                    </button> } 
                    { isLoading && <button disabled>
                        <span className="material-icons">publish</span> Publishing...
                    </button> }

                </form>

            </section>
        </main>
    );
}
 
export default CreateArticle;