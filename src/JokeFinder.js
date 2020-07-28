import React, {useState, useEffect} from 'react'
import Joke from './Joke'

function JokeFinder() {

    //2 states: input query, jokes shown
    const [query, setQuery] = useState('')
    const [jokes, setJokes] = useState([])
    
    const getJokes = async (event) => {
        
        event.preventDefault();
        let URL;

        //const URL = `https://official-joke-api.appspot.com/jokes/random`
        
        try{
            if(query === "one" || query === "1") {
                URL = `https://official-joke-api.appspot.com/jokes/random`
            } else if (query === "ten" || query === "10") {
                URL = 'https://official-joke-api.appspot.com/jokes/ten'
            }
            const result = await fetch(URL);
            const data = await result.json();
            setJokes(data);
        } catch(err) {
            console.log(err);
        }
    }
    
    const changeHandler = (event) => {
        setQuery(event.target.value)
    }
    
    return(
        <div>
            <form className="form" onSubmit={getJokes}>
                <label className="label" htmlFor="query">It's never a bad time to have a laugh! How many jokes would you like to enjoy? One or ten? Enter the number into the input box.</label>
                <input 
                    className="input"
                    type="text"
                    name="query"
                    placeholder="Enter number of Jokes Desired"
                    value={query}
                    onChange={changeHandler}
                />
                <button className="button" type="submit">Search!</button>
            </form>
             <div className="card-list">
                {jokes.length ? (
                    jokes.map((joke, index) => (
                        <Joke joke={joke} key={index}/>
                    ))
                    ) : (
                        jokes.length === 0? null : (
                            <div className="card">
                                <p className="setup" >{jokes.setup}</p>
                                <p className="punchline">{jokes.punchline}</p>
                            </div>
                        )
                )}
            </div>
        </div>
    )
}

export default JokeFinder