import { useState } from "react";

const Home = () => {

    // useState hook used for 'reactive' values that may change at some point
    // how: use array destructuring to grab 2 values that the hook returns to us: 1. initial value (eg. name) 2. function used to change the value (eg. setName)
    // value can be any type. ie. string, number, array, object, boolean

    const [name, setName] = useState("Mario"); 
    const [age, setAge] = useState(25);
        

    // useState triggers React to re-render the component and update the values on click
    const handleClick = (eventObject) => {
        setName("Luigi");  
        setAge(30);
    }

    return (
        <main className="home">
            <section className="content">

                <h2>Homepage</h2>
                <p>{ name } is { age } years old.</p>

                <p>
                    <button onClick={handleClick}>Click me</button>
                </p>
                
            </section>
        </main>
     );
}
 
export default Home;