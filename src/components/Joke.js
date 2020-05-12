import React, { useState, useEffect } from "react";

function Joke({ setup, punchline, delay }) {
  const [jokeDelay, setJokeDelay] = useState(false);

  const timeout = delay || 3000;

  useEffect(() => {
    setTimeout(() => {
      setJokeDelay(true);
    }, timeout);
  }, [timeout]);

  return (
    <div>
      <p>{setup}</p>
      {jokeDelay && <p>{punchline}</p>}
    </div>
  );
}

export default Joke;
