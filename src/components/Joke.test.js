import React from "react";
import { render, waitFor } from "@testing-library/react";

import Joke from "./Joke";

describe("Joke Component", () => {
  it("should load only setup on intial render", () => {
    const { getByText } = render(
      <Joke setup="setup test" punchline="punchline test" />
    );
    const jokeElement = getByText("setup test");
    expect(jokeElement).toBeInTheDocument();
  });

  it("should load punchline after 100 milliseconds", async () => {
    const { getByText } = render(
      <Joke setup="setup test" punchline="punchline test" delay={100} />
    );

    await waitFor(() => {
      expect(getByText("punchline test")).toBeInTheDocument();
    });
  });
});
