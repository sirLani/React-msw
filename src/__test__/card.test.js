import React from "react";
import { render } from "@testing-library/react";
import { Card } from "../components";
import { ImageContainer } from "../components/cards/styles/cards";

const wines = [
  {
    id: 1,
    name: "Jacobs Creek",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae.",
    image: "/images/wine_1.jpg",
  },
];
describe("<Card/>", () => {
  it("renders the <Card/> with populated data", () => {
    const { getByText } = render(
      <Card.Group flexDirection="row">
        {wines.map((item) => (
          <Card key={item.id}>
            <ImageContainer>
              <Card.Image src={item.image} alt="wine" />
            </ImageContainer>
            <Card.Title>{item.name}</Card.Title>
            <Card.Description>{item.description}</Card.Description>
          </Card>
        ))}
      </Card.Group>
    );
    expect(getByText("Jacobs Creek")).toBeTruthy();
    expect(
      getByText(
        "Lorem ipsum dolor sit amet consectetur adipiscing elit lacus blandit taciti, penatibus augue nisl tellus praesent pharetra libero condimentum vitae."
      )
    ).toBeTruthy();
  });
});
