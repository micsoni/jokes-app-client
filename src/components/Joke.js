import React, { useState, useEffect } from "react";

function Joke({ setup, punchline, delay }) {
  const [jokeDelay, setJokeDelay] = useState(false);

  const timeout = delay || 3000;

  useEffect(() => {
    setTimeout(() => {
      setJokeDelay(true);
    }, timeout);
  }, []);

  return (
    <div data-testid="joke-container">
      <p>{setup}</p>
      {jokeDelay && <p data-testid="joke-punch-line">{punchline}</p>}
    </div>
  );
}

export default Joke;
