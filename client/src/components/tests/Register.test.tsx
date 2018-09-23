import * as React from "react";
import { shallow } from "enzyme";
import Register from "../Register";

it("renders a username input", () => {
  expect(shallow(<Register />).find("#username").length).toEqual(1);
});

it("renders a password input", () => {
  expect(shallow(<Register />).find("#password").length).toEqual(1);
});

it("renders a email input", () => {
  expect(shallow(<Register />).find("#email").length).toEqual(1);
});
