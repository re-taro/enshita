import { composeStories } from "@storybook/testing-react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import * as stories from "~/stories/header.stories";

const { Default } = composeStories(stories);
const options = {
  name: "",
};
describe("(components) header", () => {
  test("test Snap Shot", () => {
    const { container } = render(<Default />);
    expect(container).toMatchSnapshot();
  });
  test("to be [role=banner]", () => {
    const { getByRole } = render(<Default />);
    expect(getByRole("banner", options)).toBeInTheDocument();
  });
});
