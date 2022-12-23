import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";

import { HomeHeader } from "../HomeHeader";

describe("<HomeHeader />", () => {
  it("renders correctly", () => {
    const tree = render(<HomeHeader />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("press Login correctly", async () => {
    const spyLogin = jest.fn();

    render(<HomeHeader onLogin={spyLogin} />);

    const loginButton = await screen.findByText("Login");
    fireEvent.press(loginButton);

    expect(spyLogin).toBeCalled();
  });

  it("press Logout correctly", async () => {
    const spyLogout = jest.fn();

    render(<HomeHeader ethAddress="test" onLogout={spyLogout} />);

    const loginButton = await screen.findByText("Logout");
    fireEvent.press(loginButton);

    expect(spyLogout).toBeCalled();
  });
});
