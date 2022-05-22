import styled from 'styled-components';

export const MainFormContainer = styled.section`
  display: grid;
  grid-template-columns: ${(props) => props.theme.columns};
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.highpoint};
`;

export const Figure = styled.figure`
  margin: 0;
  width: 100%;
  text-align: center;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 20px;
  color: white;
  background-color: #f1f1f1;
  height: 350px;
`;

export const Form = styled.form`
  display: grid;
  align-self: center;
  border-radius: 20px;
  gap: 40px;
`;

export const Input = styled.input`
  border-bottom: 1px solid #b8b5ff;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding: 8px 4px;
  outline-style: none;
  background: transparent;
  color: #484848;

  ::placeholder {
    color: #484848;
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  background-color: #6d1d3c;
  border-radius: 5px;
  color: #fff;
  height: 35px;
  width: 185px;
  border-style: none;
  justify-self: center;
  cursor: pointer;
`;
