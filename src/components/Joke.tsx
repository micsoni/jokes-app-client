import React, { useState, useEffect } from "react";

type CompleteJoke = { setup: string; punchline: string; delay?: number };

function Joke({ setup, punchline, delay }: CompleteJoke): JSX.Element {
  const [jokeDelay, setJokeDelay] = useState<boolean>(false);

  const timeout:number = delay || 3000

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
