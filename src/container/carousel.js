import React, { useContext } from "react";
import Carousel from "react-elastic-carousel";
import { Card } from "../components";
import { ImageContainer } from "../components/cards/styles/cards";
import { ProductContext } from "../context/context";

// this is to set the breakPoints for the carousel so as to make it responsive
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

export function CarouselContainer() {
  // I imported thedata fetched by using context API for state management
  const { data, error } = useContext(ProductContext);

  if (error) return <span>error</span>;
  if (!data) return <span>loading...</span>;
  return (
    <Carousel breakPoints={breakPoints}>
      {data.map((item) => (
        <Card key={item.id}>
          <ImageContainer>
            <Card.Image src={item.image} alt="wine" />
          </ImageContainer>
        </Card>
      ))}
    </Carousel>
  );
}
