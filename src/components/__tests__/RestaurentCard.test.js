import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurentCard, { withLastMileTravel } from "../RestaurentCard";
import MOCK_DATA from "../Mocks/restaurentCardMock.json";

it("should render Restaurent Card Component with props Data", () => {
  render(<RestaurentCard resData={MOCK_DATA} />);

  const name = screen.getByText("Burger King");

  expect(name).toBeInTheDocument();
});

it("should render Restaurent Card component with last mile travelled", () => {
  // test Higher Order Component with Last Mile Travelled

  const ResCardWithLastMileTravelled = withLastMileTravel(RestaurentCard);

  render(<ResCardWithLastMileTravelled resData={MOCK_DATA} />);

  const travelledDis = screen.getByText("Travelled More than 1.6km");

  expect(travelledDis).toBeInTheDocument();
});
