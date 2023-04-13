import React from "react";
import { render, screen } from "@testing-library/react";
import RecordByCNJ from "./RecordByCNJ";
import { BrowserRouter as Router } from "react-router-dom";

describe("RecordByCNJ", () => {
  test("should render RecordByCNJ", () => {
    render(
      <Router>
        <RecordByCNJ />
      </Router>
    );
    const backButtonElement = screen.getByTestId("back-btn");
    expect(backButtonElement).toBeInTheDocument();

    const searchBarElement = screen.getByTestId("search-bar");
    expect(searchBarElement).toBeInTheDocument();

    const lawSuitDetailedElement = screen.getByTestId("lawsuit-detailed-container");
    expect(lawSuitDetailedElement).toBeInTheDocument();

    const timelineElement = screen.getByTestId("timeline-container");
    expect(timelineElement).toBeInTheDocument();
  });
});