import { render, screen } from "@testing-library/react";
import Header from "./components/Header";
import App from "./App";
import React from "react";
describe("Button Component", () => {
  it("should render the component", () => {
    const view = render(<App />);
    console.log(expect(screen.getByTestId("header")).toBeDefined()); 
  });
});
