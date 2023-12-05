import Form from ".";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("Koşulların Onaylanmasına Göre Buton Aktifliği", async () => {
  render(<Form />);

  const user = userEvent.setup();

  const orderButton = screen.getByRole("button");
  const checkBox = screen.getByRole("checkbox");

  expect(orderButton).toBeDisabled();
  expect(checkBox).not.toBeChecked();

  await user.click(checkBox);
  expect(orderButton).toBeEnabled();

  await user.click(checkBox);
  expect(orderButton).toBeDisabled;
});

test("onayla butonu hover olunca bildirimin çıkması", async () => {
  render(<Form />);
  const user = userEvent.setup();

  const checkBox = screen.getByRole("checkbox");
  const orderButton = screen.getByRole("button");
  const popup = screen.getByText("Size bir ürün teslimatı", { exact: false });

  await user.click(checkBox);

  fireEvent.mouseEnter(orderButton);
  expect(popup).toBeVisible();

  fireEvent.mouseLeave(orderButton);
  expect(popup).not.toBeVisible();
});
