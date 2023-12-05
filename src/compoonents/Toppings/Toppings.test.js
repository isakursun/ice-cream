import { render, screen } from "@testing-library/react";
import Toppings from ".";
import userEvent from "@testing-library/user-event/dist/types";

test("Veri api'den geldikten sonra ekrana basma", async () => {
  render(<Toppings />);

  const images = await screen.findAllByRole("img");

  expect(images.length).toBeGreaterThanOrEqual(1);
});

test("sosları ekleme ve çıkarma işleminden sonra fiyat değişikliği", async () => {
  render(<Toppings />);
  const user = userEvent.setup();

  const total = screen.getByRole("heading", { name: /Sos Ücreti/i });

  const MMs = await screen.findByAltText("M&Ms");
  const mochi = await screen.findByAltText("Mochi");

  await user.click(MMs);

  expect(total).toHaveTextContent("3");

  await user.click(mochi);

  expect(total).toHaveTextContent("6");

  await user.click(MMs);

  expect(total).toHaveTextContent("3");

  await user.click(mochi);

  expect(total).toHaveTextContent("0");
});
