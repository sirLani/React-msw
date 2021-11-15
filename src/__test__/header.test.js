import React from "react";
import { render } from "@testing-library/react";
import { Header } from "../components";

describe("<Header/>", () => {
  it("renders the <header/> with populated data", () => {
    const { getByText } = render(
      <Header>
        <Header.Logo>WINE GALLERY</Header.Logo>
        <Header.Text>The Savoury taste of wine</Header.Text>
      </Header>
    );

    expect(getByText("WINE GALLERY")).toBeTruthy();
    expect(getByText("The Savoury taste of wine")).toBeTruthy();
  });
});
