import React from "react";

import Joke from "./Joke";
import useJokeApiHook from "./useJokeApiHook";

function Homepage() {
  const [{ joke, isLoading, isError }] = useJokeApiHook();

  if (isError.status)
    return (
      <div>
        <p>Error {isError.type}</p>
        {isError.message}
      </div>
    );

  if (isLoading) 
  return <p>loading</p>;
  
  return <Joke setup={joke.setup} punchline={joke.punchline} />;
}

export default Homepage;
