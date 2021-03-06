import React from "react";
import { render } from "react-testing-library";
import { Button } from "../Button";

test("render", () => {
  const { getByText } = render(<Button>test</Button>);
  expect(getByText("test")).toMatchInlineSnapshot(`
<button
  role="button"
  tabindex="0"
  type="button"
>
  test
</button>
`);
});
