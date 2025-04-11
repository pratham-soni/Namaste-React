import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../Mocks/restaurentListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

/*
we need to create the mock fetch fn like browser uses.
? global => this is global object where-ever this is being rendered (jest-dom).
We don't make an actual network call from test, because this test is running on a "js-dom which is brwser like environment"
* that's why we will use mock data - "restaurentListMock.json"
*/
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render body component with Search button", async () => {
  // randering the component
  await act(async () => {
    return render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  // finding cards initialy loaded
  const CarsdeBeforeSearch = screen.getAllByTestId("rescard");
  // validating if the total cards are 8.
  expect(CarsdeBeforeSearch.length).toBe(8);

  // finding search restaurent button
  const searchRestaurentBtn = screen.getByRole("button", {
    name: "Search Restaurent",
  });
  // finding search input
  const searchInput = screen.getByTestId("searchInput");
  // entering "coffee" into search box
  fireEvent.change(searchInput, { target: { value: "coffee" } });
  // clicking on search restaurent button
  fireEvent.click(searchRestaurentBtn);
  // now getting the updated cards
  const cards = screen.getAllByTestId("rescard");
  // checking if no. of cards is 2 now
  expect(cards.length).toBe(2);
});
