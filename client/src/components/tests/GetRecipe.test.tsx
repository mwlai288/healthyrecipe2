import * as React from "react";
import { shallow } from "enzyme";
import GetRecipe from "../getRecipe/GetRecipe";

describe("<GetRecipe />", () => {
  const filler: any = null;

  it("Should call searchRecipe with the appropriate recipe", () => {
    const food = "hot dog";
    const searchRecipe = jest.fn();
    const wrapper = shallow(
      <GetRecipe
        search={"hot dog"}
        recipes={[filler]}
        searchRecipe={searchRecipe}
      />
    );

    const button = wrapper.find("#getRecipe");
    button.simulate("click");
    expect(searchRecipe).toBeCalledWith(food);
  });
});
