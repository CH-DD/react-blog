const Home = () => {

    const handleClick = (eventObject) => {
        console.log("Hi there", eventObject);
    }

    const handleClickAgain = (name) => {
        console.log("Hi " + name);
    }

    return ( 
        <main className="home">
            <section className="content">
                <h2>Homepage</h2>
                <p>
                    <button onClick={ handleClick }>Click me</button>
                </p>

                <p>
                    <button onClick={ 
                        () => { handleClickAgain("Bill") }
                    }>
                        Click me again
                    </button>

                </p>
                
            </section>
        </main>
     );
}
 
export default Home;