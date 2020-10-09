/* eslint-disable no-undef */
import App from "../src/App.vue";
import { render } from "@testing-library/vue";

test("It renders correctly", () => {
  const { getByText } = render(App);
  getByText("Times clicked: 0");
});
