import { useState } from "react";   

const CreateArticle = () => {

    // State: for form input values
    const [ title, setTitle ] = useState("");           // initially empty
    const [ body, setBody ] = useState("");             // initially empty
    const [ author, setAuthor ] = useState("Mario");    // inc. default value

    // Handle form submission
    const handleSubmit = (event) => {

        // prevent default action: page refresh when button is pressed
        event.preventDefault();

        // create a new article object. note: json-server automatically generates an id.
        const article = { title, body, author };
        console.log(article);
    }

    return (  
        <main className="create-article">
            <section className="content-area">
                <h2>Add new article</h2>

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
                        <option value="Mario">Mario</option>
                        <option value="Yoshi">Yoshi</option>
                        <option value="Luigi">Luigi</option>
                    </select>

                    <button>
                        <span className="material-icons">publish</span> Publish
                    </button>

                </form>

            </section>

            {/* temporary testing stuff */}
            {/* <h4>Enter some values to test 2 way binding...</h4>
            <p>Title text: { title }</p>
            <p>Body text: { body }</p>
            <p>Author: { author }</p>
             */}
        </main>
    );
}
 
export default CreateArticle;