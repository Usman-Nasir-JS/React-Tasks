import { useEffect, useState } from "react";

function JokeGenerator() {

    const [joke, setJoke] = useState("");

    const getJoke = () => {
    
        fetch("https://official-joke-api.appspot.com/random_joke")
        
        .then(res => res.json())
      
        .then(data => {
            console.log(data);
            
            setJoke(data);
        });
    
    };

    useEffect(() => {
        getJoke();
    }, []);

    return (

        <div>
            <h2 className="text-3xl text-center underline py-5">➮ Random Joke</h2>

            <div className="border m-5 p-5">

                <h2>Type: {joke.type}</h2>
                <p>Setup: {joke.setup}</p>
                <p>Punchline: {joke.punchline}</p>

                <button className="border rounded-full mt-3 p-1 px-3 cursor-pointer" onClick={getJoke}>New Joke</button>
            </div>

        </div>
  
    );
}

export default JokeGenerator;
