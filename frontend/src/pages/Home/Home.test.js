import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";

describe("Home", () => {
  test("should render Home", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const title = screen.getByText("Consulta Processual");
    expect(title).toBeInTheDocument();

    const searchInstructions = screen.getByText(
      "Selecione um tribunal para listar os processos ou buscar pelo número unificado"
    );
    expect(searchInstructions).toBeInTheDocument();

    const searchBarElement = screen.getByTestId("search-bar");
    expect(searchBarElement).toBeInTheDocument();

    const searchImg = screen.getByAltText("Woman searching documents");
    
    expect(searchImg).toBeInTheDocument();
  });
});
