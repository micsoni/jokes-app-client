import { useState, useEffect } from "react";
import axios from "axios";

const useJokeApiHook = () => {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({
    status: false,
    type: null,
    message: null,
  });

  useEffect(() => {
    const fetchJoke = async () => {
      setIsError({ status: false, message: null });
      try {
        const jokeInfo = await axios.get(
          `https://official-joke-api.appspot.com/jokes/programming/random`
        );
        setJoke({
          setup: jokeInfo.data[0].setup,
          punchline: jokeInfo.data[0].punchline,
        });
      } catch (error) {
        console.log(error.response);
        setIsError({
          status: true,
          type: error.response.status,
          message: "Ops! Something went wrong",
        });
      }
      setIsLoading(false);
    };
    fetchJoke();
  }, []);

  return [{ joke, isLoading, isError }];
};

export default useJokeApiHook;
