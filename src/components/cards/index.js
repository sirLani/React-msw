import React from "react";
import {
  Container,
  Title,
  Image,
  Description,
  Group,
  ImageContainer,
} from "./styles/cards";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.Title = function CardTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Card.Image = function CardImage({ ...restProps }) {
  return <Image {...restProps} />;
};
Card.Description = function CardDescription({ children, ...restProps }) {
  return <Description {...restProps}>{children}</Description>;
};

Card.Group = function CardGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
Card.ImageContainer = function CardImageContainer({ children, ...restProps }) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};
