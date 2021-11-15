import React, { useContext } from "react";
import { Card } from "../components";
import { ImageContainer } from "../components/cards/styles/cards";
import { ProductContext } from "../context/context";

export function CategoriesContainer() {
  const { data, error } = useContext(ProductContext);

  if (error) return <span>error</span>;
  if (!data) return <span>loading...</span>;

  return (
    <Card.Group flexDirection="row">
      {/* mapping the array of products into the component */}
      {data.map((item) => (
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
}
