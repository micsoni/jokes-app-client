import React, { useState, useEffect } from "react";
import axios from "axios";
import Joke from "./Joke";

function Homepage() {
  const [loading, setLoading] = useState(true);
  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  useEffect(() => {
    async function fetchJoke() {
      try {
        const jokeInfo = await axios.get(
          `https://official-joke-api.appspot.com/jokes/programming/random`
        );
        setJoke({
          setup: jokeInfo.data[0].setup,
          punchline: jokeInfo.data[0].punchline,
        });
        setLoading(false);
      } catch (error) {
        //future error handling
        console.log("ERROR FETCHING JOKE", error);
      }
    }
    fetchJoke();
  }, []);

  if (loading) return <p>loading</p>;
  return <Joke setup={joke.setup} punchline={joke.punchline} />;
}

export default Homepage;
