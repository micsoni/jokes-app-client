import React from "react";
import { render, act, waitForElementToBeRemoved } from "@testing-library/react";
import axios from "axios";
import Homepage from "./Homepage";

jest.mock("axios");

describe("Homepage", () => {
  it("should render loading before joke is fetched & rendered", async () => {
    const fakeJoke = { setup: "setup test", punchline: "punchline test" };
    const response = { data: [fakeJoke] };

    axios.get.mockImplementationOnce(() => Promise.resolve(response));

    const { getByText } = render(<Homepage />);
    const loading = getByText("loading");
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(loading);

    expect(getByText(fakeJoke.setup)).toBeInTheDocument();
  });
});
