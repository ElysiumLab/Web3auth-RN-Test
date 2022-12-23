import React from "react";
import App from "../App";
import { render } from "@testing-library/react-native";

// jest.mock("../src", () => {
//   return {
//     Home: jest.fn(),
//   };
// });

jest.mock("react-native/Libraries/Animated/NativeAnimatedHelper");

describe("<App />", () => {
  it("renders correctly", () => {
    const tree = render(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
