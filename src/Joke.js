import React from 'react'

function Joke(props) {
    const {joke} = props;
    return(
        <div className="card">
            <p className="setup" >{joke.setup}</p>
            <p className="punchline">{joke.punchline}</p>
        </div>
    )
}

export default Joke