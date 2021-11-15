import styled from "styled-components/macro";

export const Logo = styled.p`
  color: #800000;
  font-weight: 700;
`;

export const Container = styled.div`
  -webkit-box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
  box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%);
  border-radius: 6px;
  max-width: 1200px;
  width: 90%;
  justify-content: space-between;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 60px;

   /* make it mobile responsive */

  @media (max-width: 930px) {
    box-shadow: none;
    margin-top: 15px;
    padding: 1rem 2rem;
  }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    width: 85%;
  }
`;

export const Text = styled.p``;
