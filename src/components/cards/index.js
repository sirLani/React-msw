import React from "react";
import {
  Container,
  Title,
  Image,
  Description,
  Group,
  ImageContainer,
} from "./styles/cards";

export default function Card({ children }) {
  return <Container>{children}</Container>;
}

Card.Title = function CardTitle({ title }) {
  return <Title>{title}</Title>;
};

Card.Image = function CardImage({ image }) {
  return (
    <ImageContainer>
      <Image src={image} alt={`card-${image}`} />
    </ImageContainer>
  );
};

Card.Description = function CardDescription({ children }) {
  return <Description>{children}</Description>;
};

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
