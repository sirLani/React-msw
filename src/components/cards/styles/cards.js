import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  box-sizing: border-box;
  width: 340px;
  -webkit-box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
  border-radius: 6px;
  cursor: pointer;

  @media (max-width: 1041px) {
    margin-right: 0.8rem;
    margin-left: 0.8rem;
    justify-content: center;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  height: 300px;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  overflow: hidden;
`;

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  background-color: grey;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 18px;
  margin: 0;
  margin-left: 12px;
  margin-top: 25px;
`;

export const Description = styled.p`
  font-size: 15px;
  margin-left: 12px;
  max-width: 220px;
  margin-bottom: 35px;
`;

// i made this container reusable by not giving it a hard coded flex-direction, margin and item alignment

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "row" ? "row" : "column"};
  align-items: ${({ alignItems }) =>
    alignItems && `align-items: ${alignItems}`};
  margin: ${({ margin }) => margin && `margin: ${margin}`};
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 80px;
  @media (max-width: 1041px) {
    justify-content: center;
  }
`;
