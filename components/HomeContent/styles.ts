import styled from 'styled-components';

export const HomeContentGrid = styled.main`
  display: grid;
  align-items: center;
  height: 100%;
  grid-template-columns: repeat(3, 12fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 12fr);
  }
 
`

export const HomeContentContainer = styled.div`
  padding: 20px;
  text-align: center;
`

export const Img = styled.img`
  width: 60%;
`;