import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../Mocks/restaurentListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/*
we need to create the mock fetch fn like browser uses.
global => this is global object where-ever this is being rendered (jest-dom).
We don't make an actual network call from test, because this test is running on a "js-dom which is browser like environment"
* that's why we will use mock data - "restaurentListMock.json"
! Note:- Before running below suit, pls update the restaurentListMock.json based on live data and simulate on UI first for expectation.
*/

describe("search feature test cases on homepage =>", () => {
  // creating mock fetch method

  beforeAll(() => {
    global.fetch = jest.fn(() => {
      return Promise.resolve({
        json: () => {
          return Promise.resolve(MOCK_DATA);
        },
      });
    });
  });
  //  randering the component before each test cases
  beforeEach(async () => {
    await act(async () => {
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      );
    });
  });

  afterEach(() => {
    // console.log("above test case executed successfully...");
  });

  afterAll(() => {
    // console.log("All test cases executed !!!!");
  });

  it("1. Should search restaurant list for pizza input", async () => {
    const initialCards = screen.getAllByTestId("resCard");
    expect(initialCards.length).toBe(20);

    const searchInput = screen.getByTestId("searchInput");
    const searchButton = screen.getByRole("button", {
      name: /Search Restaurent/,
    });
    fireEvent.change(searchInput, { target: { value: "pizza" } });
    fireEvent.click(searchButton);

    await waitFor(() => {
      const filteredCards = screen.getAllByTestId("resCard");
      expect(filteredCards.length).toBe(1);
      // console.log(filteredCards);
    });
  });

  it("2. Should search top rated restaurant list using button on homepage", async () => {
    const initialCards = screen.getAllByTestId("resCard");
    expect(initialCards.length).toBe(20);

    const searchButton = screen.getByRole("button", {
      name: /Top Rated Restaurents/,
    });
    fireEvent.click(searchButton);

    const filteredCards = screen.getAllByTestId("resCard");
    // console.log(filteredCards.length);
    expect(filteredCards.length).toBe(13);
  });
});
