import React from "react";
import {
  render,
  waitForElementToBeRemoved,
  waitFor,
} from "@testing-library/react";
import axios from "axios";
import Homepage from "./Homepage";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>

describe("Homepage", () => {
  it("should render loading before joke is fetched & rendered", async () => {
    const fakeJoke = { setup: "setup test", punchline: "punchline test" };
    const response = { data: [fakeJoke] };

    mockedAxios.get.mockImplementationOnce(() => Promise.resolve(response));

    const { getByText } = render(<Homepage />);
    const loading = getByText("loading");
    expect(loading).toBeInTheDocument();

    await waitForElementToBeRemoved(loading);

    expect(getByText(fakeJoke.setup)).toBeInTheDocument();
  });
  it("should render error message when fetch fails", async () => {
    const error = { response: { status: 404 } };
    mockedAxios.get.mockImplementationOnce(() => Promise.reject(error))

    const { getByText } = render(<Homepage />);
    await waitFor(() => {
      expect(getByText("Ops! Something went wrong")).toBeInTheDocument();
    });
  });
});
