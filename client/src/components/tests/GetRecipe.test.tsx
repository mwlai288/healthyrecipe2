import * as React from "react";
import { shallow } from "enzyme";
import GetRecipe from "../getRecipe/GetRecipe";

describe("<GetRecipe />", () => {
  it("Should call SearchRecipe function", () => {
    const searchRecipe = jest.fn();
    const wrapper = shallow(<GetRecipe />);
    const button = wrapper.find("#search-recipe");
    button.simulate("click");
    expect(searchRecipe).toBeCalled;
  });
});
