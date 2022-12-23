import React from "react";
import { render } from "@testing-library/react-native";

import FocusedStatusBar from "../FocusedStatusBar";

jest.mock("@react-navigation/core", () => {
  const actualNav = jest.requireActual("@react-navigation/core");
  return {
    ...actualNav,
    useIsFocused: jest
      .fn()
      .mockReturnValueOnce(true)
      .mockReturnValueOnce(false),
  };
});

describe("<FocusedStatusBar />", () => {
  it("renders correctly", () => {
    const tree = render(<FocusedStatusBar />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("unfocused correctly", () => {
    const tree = render(<FocusedStatusBar />).toJSON();
    expect(tree).toBeNull();
  });
});
