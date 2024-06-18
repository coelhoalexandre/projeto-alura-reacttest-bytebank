import React from "react";
import { render, screen } from "@testing-library/react";
import Cabecalho from "./index.jsx";

test("Deve renderizar o nome do usário logado", () => {
  render(<Cabecalho />);
  const nomeUsuario = screen.getByText("Joana Fonseca Gomes");
  expect(nomeUsuario).toBeInTheDocument();
});
