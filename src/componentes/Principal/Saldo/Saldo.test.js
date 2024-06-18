import React from "react";
import Saldo from "./index.jsx";
import { render, screen } from "@testing-library/react";

describe("Componente <Saldo />", () => {
  test("deve renderizar o saldo com valor monetário", () => {
    render(<Saldo saldo={1000} />);

    const saldo = screen.getByTestId("saldo");
    expect(saldo).toHaveTextContent("R$ 1000");
  });
});
