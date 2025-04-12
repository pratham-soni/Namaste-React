import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurentMenu from "../RestaurentMenu";
import Header from "../Header";
import Cart from "../Cart";
import MOCK_DATA from "../Mocks/mockRestaurentMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe("Integration testing example: Restaurent Menu related test Cases", () => {
  beforeAll(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA),
      })
    );
  });
  beforeEach(() => {
    console.log("starting each saprate test....");
  });

  it("1. Should render RestaurentMenu Component", async () => {
    await act(async () => render(<RestaurentMenu />));

    const restaurentName = screen.getByText("Burger King");

    expect(restaurentName).toBeInTheDocument();
  });

  it("2. Should be able to click on Accordion Header on RestaurentMenu Component", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurentMenu />
        </Provider>
      )
    );

    const accordionHeader = screen.getByText(
      "Korean Spicy Fest(Limited Time Only)"
    );

    fireEvent.click(accordionHeader);
  });

  it("3. Should be rendered (total 20 items) after click on Accordion Header 'Korean Spicy Fest(Limited Time Only)' ", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurentMenu />
        </Provider>
      )
    );

    const accordionHeader = screen.getByText(
      "Korean Spicy Fest(Limited Time Only)"
    );

    fireEvent.click(accordionHeader);

    const restaurentItems = screen.getAllByTestId("foodItems");

    expect(restaurentItems.length).toBe(20);
  });

  /*
  it("4. Should be able to click on Add button for a perticular restaurent items 1 time ", async () => {
    await act(async () =>
      render(
        <Provider store={appStore}>
          <RestaurentMenu />
        </Provider>
      )
    );

    const accordionHeader = screen.getByText(
      "Korean Spicy Fest(Limited Time Only)"
    );

    fireEvent.click(accordionHeader);

    const restaurentItems = screen.getAllByTestId("foodItems");

    expect(restaurentItems.length).toBe(20);

    const addBtn = screen.getAllByRole("button", { name: "ADD +" });

    // expect(addBtn.length).toBe(20);

    fireEvent.click(addBtn[0]);
  });
 */

  it("4. Should render restaurent menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurentMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText(
      "Korean Spicy Fest(Limited Time Only)"
    );
    fireEvent.click(accordionHeader);

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    const addBtns = screen.getAllByRole("button", { name: "ADD +" });
    fireEvent.click(addBtns[0]);

    expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

    fireEvent.click(addBtns[1]);
    expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();

    expect(screen.getAllByTestId("foodItems").length).toBe(22);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(20);

    expect(screen.getByText(/Cart is empty!/)).toBeInTheDocument();
  });
});
