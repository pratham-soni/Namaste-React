import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

describe("Header Component: Unit Test Cases - ", () => {
  it("Should load header component with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", { name: "Login" });

    // const loginBtn = screen.getByText("Login");

    expect(loginBtn).toBeInTheDocument();
  });

  it("Should render Header Component with Cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });

  it("Should render Header Component with Cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart-(0 items)");

    expect(cartItems).toBeInTheDocument();
  });

  it("Should Change Login btn to Logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginBtn);

    const logoutBtn = screen.getByRole("button", { name: "Logout" });

    expect(logoutBtn).toBeInTheDocument();
  });
});
