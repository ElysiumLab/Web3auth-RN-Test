import React from "react";
import { render, fireEvent, screen } from "@testing-library/react-native";

import { RectButton, CircleButton } from "../Button";

describe("<RectButton />", () => {
  it("renders correctly", () => {
    const tree = render(<RectButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("press correctly", async () => {
    const mockCallback = jest.fn();
    const title = "testRectButton";

    render(<RectButton title={title} handlePress={mockCallback} />);

    const rectButton = await screen.findByText(title);

    fireEvent.press(rectButton);

    expect(mockCallback).toHaveBeenCalled();
  });
});

describe("<CircleButton />", () => {
  it("renders correctly", () => {
    const tree = render(<CircleButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("press correctly", async () => {
    const mockCallback = jest.fn();

    render(<CircleButton handlePress={mockCallback} />);

    const circleButton = await screen.findByRole("imagebutton");

    fireEvent.press(circleButton);

    expect(mockCallback).toHaveBeenCalled();
  });
});
