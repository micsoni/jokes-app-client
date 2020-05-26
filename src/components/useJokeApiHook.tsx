import { useState, useEffect } from "react";
import axios from "axios";

type Error = { status: boolean; type: number | null; message: string | null };

type Joke = { setup: string; punchline: string };

function useJokeApiHook() {
  const [joke, setJoke] = useState<Joke>({ setup: "", punchline: "" });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<Error>({
    status: false,
    type: null,
    message: null,
  });

  useEffect(() => {
    const fetchJoke = async () => {
      setIsError({ status: false, message: null, type: null });
      try {
        const jokeInfo = await axios.get(
          `https://official-joke-api.appspot.com/jokes/programming/random`
        );
        setJoke({
          setup: jokeInfo.data[0].setup,
          punchline: jokeInfo.data[0].punchline,
        });
      } catch (error) {
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
}

export default useJokeApiHook;
