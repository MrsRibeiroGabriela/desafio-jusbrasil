import React from "react";
import { render, screen } from "@testing-library/react";
import ListRecordsByCourt from "./ListRecordsByCourt";
import { BrowserRouter as Router } from "react-router-dom";

describe("ListRecordsByCourt", () => {
  test("should render ListRecordsByCourt", () => {
    render(
      <Router>
        <ListRecordsByCourt />
      </Router>
    );
    const backButtonElement = screen.getByTestId("back-btn");
    expect(backButtonElement).toBeInTheDocument();
    
    const searchBarElement = screen.getByTestId("search-bar");
    expect(searchBarElement).toBeInTheDocument();

    const listElement = screen.getByTestId("search-bar");
    expect(listElement).toBeInTheDocument();

    const listParagraphElement = screen.getByTestId("search-paragraph");
    expect(listParagraphElement).toBeInTheDocument();
  });
});

