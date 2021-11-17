import React, { useContext } from "react";
import { Card } from "../components";
import { ImageContainer } from "../components/cards/styles/cards";
import { ProductContext } from "../context/context";

export function CategoriesContainer() {
  const { data, error } = useContext(ProductContext);

  if (error) return <div style={{display: 'flex', alignItems:'center', width: '100%', justifyContent: 'center', marginBottom: '5rem'}}><span>error</span></div>;
  if (!data) return <div style={{display: 'flex', alignItems:'center', width: '100%', justifyContent: 'center', marginBottom: '5rem'}}><span>loading...</span></div>;

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
