import React from "react";
import { render } from "@testing-library/react-native";

import Home from "../Home";

// jest.mock("expo-constants", () => {
//   const actualConstants = jest.requireActual("expo-constants");

//   return {
//     ...actualConstants,
//     Constants: {
//       appOwnership: "expo",
//     },
//   };
// });

jest.mock("expo-linking"),
  () => ({
    createURL: "test",
  });

jest.mock("../../components", () => {
  const actualHomeHeader = jest.requireActual(
    "../../components/headers/HomeHeader"
  );

  const { HomeHeader } = actualHomeHeader;

  return {
    FocusedStatusBar: jest.fn(),
    HomeHeader: HomeHeader,
  };
});

describe("<Home />", () => {
  it("renders correctly", () => {
    const tree = render(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
