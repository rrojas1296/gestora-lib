import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("<Button />", () => {
  it("renderiza el texto del botón", () => {
    render(<Button>Haz clic</Button>);
    expect(
      screen.getByRole("button", { name: /haz clic/i }),
    ).toBeInTheDocument();
  });

  it("ejecuta onClick cuando se hace clic", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Haz clic</Button>);
    fireEvent.click(screen.getByRole("button", { name: /haz clic/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("no ejecuta onClick si está deshabilitado", () => {
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        Deshabilitado
      </Button>,
    );
    fireEvent.click(screen.getByRole("button", { name: /deshabilitado/i }));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("está deshabilitado si la prop disabled es true", () => {
    render(<Button disabled>Deshabilitado</Button>);
    const button = screen.getByRole("button", { name: /deshabilitado/i });
    expect(button).toBeDisabled();
  });
});
