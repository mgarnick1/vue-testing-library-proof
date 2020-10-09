/* eslint-disable no-undef */
import App from "../src/App.vue";
import { fireEvent, render } from "@testing-library/vue";

test("It renders correctly", () => {
  const { getByText } = render(App);
  getByText("Times clicked: 0");
});

test("increment the count", async () => {
  const { getByText } = render(App);
  const increment = getByText("increment");
  await fireEvent.click(increment);
  getByText("Times clicked: 1");
});
