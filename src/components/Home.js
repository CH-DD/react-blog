const Home = () => {

    const handleClick = (eventObject) => {
        console.log("Hi there", eventObject);  // eventObject automatically available when an event occurs
    }

    const handleClickAgain = (name, eventObject) => {
        console.log("Hi " + name, eventObject.target);
    }

    return ( 
        <main className="home">
            <section className="content">
                <h2>Homepage</h2>
                <p>
                    <button onClick={ handleClick }>Click me</button>
                </p>

                <p>
                    <button onClick={(eventObject) => handleClickAgain("Bill", eventObject)}>
                        Click me again
                    </button>

                </p>
                
            </section>
        </main>
     );
}
 
export default Home;