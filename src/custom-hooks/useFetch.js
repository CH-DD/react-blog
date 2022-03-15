import { useState, useEffect } from "react";


// Reusable function that can be used to fetch different types of data. eg. articles, topics etc. from different fetch url - supplied as an argument
// Articles data currently fetched from fake local API using 'json-server' package and data/dummy-db.json
const useFetch = (url) => {

    // State values: 
    // Initial data
    const [data, setData] = useState(null); // null will be updated when data is fetched 

    // Loading message whilst fetching data
    const [isLoading, setIsLoading] = useState(true);  // initial value: true

    // Error handling
    const [error, setError] = useState(null);

    // useEffect: fetch articles data from API
    // function only fired once - on initial render (due to empty dependency array)
    useEffect(() => {

        // Cleanup function variable: used to stop fetch requests when not needed. ie. switching away from articles page before data is loaded. 
        // Uses 'signal' argument in the fetch parameters, and returned function later.
        const abortController = new AbortController();

        // temporarily wrap fetch in 'setTimeout' to simulate a real web server
        setTimeout(() => {  
            fetch(url, { signal: abortController.signal })

                .then(response => {         // get response object 
                    if(!response.ok) {      // catch data request errors
                        return setError("We could not find the thing you wanted.");
                    }
                    return response.json(); // parse json --> object & return a promise
                }) 
                .then(data => {             // get returned data: array of objects 
                    setData(data);          // update state with the fetched array
                    setIsLoading(false);    // update loading message state
                })
                .catch((err) => {           // catch network connection errors

                    // if fetch is aborted (by switching pages), don't change state
                    if (err.name === "AbortError") {
                        console.log("Data fetching aborted!")
                    } else {
                        // set error message
                        setError("We seem to be experiencing connection issues.");
                        // remove loading message: no longer required
                        setIsLoading(false);
                    }
                })
                
        }, 1000); // time delay in ms

        // Cleanup function: stop the fetch
        return () => abortController.abort();

    }, [url]);  // whenever url changes, re-run the function to get data 

    // return an object of values (can also use other data types such as array, string, boolean etc.) 
    return { data, isLoading, error }
}

export default useFetch;