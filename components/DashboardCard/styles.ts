import styled from 'styled-components';

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 26rem;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const Card = styled.div`
  border: 2px solid #f1eee9;
  height: 35rem;
  width: 20rem;
  align-self: center;
  justify-self: center;
  border-radius: 20px;
  box-shadow: 15px -9px 15px -3px rgba(0, 0, 0, 0.1);
  margin-top: 15px;
`;

export const CardImgContainer = styled.figure`
  width: 100%;
  margin: 0;
  text-align: center;
`;

export const CardCover = styled.img`
  max-width: 16rem;
  padding-top: 2rem;
  text-align: center;
`;

export const CardInfoContainer = styled.div`
  display: grid;
  grid-auto-rows: 42px;
  align-items: center;
  align-self: center;
  justify-self: center;
  padding-top: 20px;
  height: 325px;
  width: 100%;
  background-color: #eeeeee;
  border-radius: 20px;
`;

export const CardInfoText = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1.1rem;
  margin: 0;
`;