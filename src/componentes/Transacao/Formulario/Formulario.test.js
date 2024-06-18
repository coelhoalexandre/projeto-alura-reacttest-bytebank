import React from "react";
import { render, screen } from "@testing-library/react";
import Formulario from "./index.jsx";
import userEvent from "@testing-library/user-event";

describe("Deve renderizar um campo de input", () => {
  test("...no documento", () => {
    render(<Formulario />);
    const campoText = screen.getByPlaceholderText("Digite um valor");
    expect(campoText).toBeInTheDocument();
  });

  test("..com o type number", () => {
    render(<Formulario />);
    const campoText = screen.getByPlaceholderText("Digite um valor");
    expect(campoText).toHaveAttribute("type", "number");
  });

  test("...que pode ser preenchido", () => {
    render(<Formulario />);
    const campoText = screen.getByPlaceholderText("Digite um valor");
    userEvent.type(campoText, "50");
    expect(campoText).toHaveValue(50);
  });
});

test("Deve chamar um evento de onSubmit ao clicar em realizar transação", () => {
  const realizarTransacao = jest.fn();

  render(<Formulario realizarTransacao={realizarTransacao} />);
  const botao = screen.getByRole("button");

  userEvent.click(botao);
  expect(realizarTransacao).toHaveBeenCalledTimes(1);
});

test("Deve ser possível selecionar uma opção do elemento <select/>", () => {
  render(<Formulario />);
  const select = screen.getByRole("combobox");
  userEvent.selectOptions(select, ["Depósito"]);

  expect(
    screen.getByRole("option", { name: "Selecione um tipo de transação" })
      .selected
  ).toBe(false);

  expect(screen.getByRole("option", { name: "Depósito" }).selected).toBe(true);
});