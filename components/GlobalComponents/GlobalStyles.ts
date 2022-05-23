import styled from 'styled-components';

export const MainFormContainer = styled.section`
  display: grid;
  grid-template-columns: ${(props) => props.theme.columns};
  align-items: center;
  justify-content: center;
  height: ${(props) => props.theme.highpoint};
  margin-top: ${(props) => props.theme.margin};

  @media screen and (max-width: 992px) {
    grid-template-columns: ${(props) => props.theme.breakColumns};
  }
`;

export const Figure = styled.figure`
  margin: 0;
  width: ${(props) => props.theme.imgWidth};
  text-align: center;
  align-self: center;
  justify-self: center;

  @media screen and (max-width: 992px) {
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
  height: ${(props) => props.theme.formsHeight};
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: ${(props) => props.theme.formCol};
  align-self: center;
  border-radius: 20px;
  gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

export const ErrorField = styled.p`
  color: red;
  font-size: 10px;
  margin: 0;
  padding: 0;
`

export const Error = styled.p`
  color: red;
  text-align: center;
`

export const Button = styled.button`
  background-color: #6d1d3c;
  border-radius: 5px;
  color: #fff;
  height: 35px;
  width: 185px;
  border-style: none;
  justify-self: center;
  cursor: pointer;
  grid-column-start: ${(props) => props.theme.btnColStart};
  grid-column-end: ${(props) => props.theme.btnColEnd};

  @media screen and (max-width: 768px) {
    grid-column-start: 1;
    grid-column-end: 1;
  }
`;
