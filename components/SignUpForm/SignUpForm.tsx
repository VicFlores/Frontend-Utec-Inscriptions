import React from 'react';
import { ThemeProvider } from 'styled-components';
import { TForm } from '../../types/TForm';
import {
  Button,
  Figure,
  Form,
  Img,
  Input,
  MainFormContainer,
  FormContainer,
} from '../GlobalComponents/GlobalStyles';

const SignUpForm = ({
  src,
  textButton,
  cols,
  height,
  breakpoint,
  imgWidth,
  formsHeight,
}: TForm) => {
  return (
    <ThemeProvider
      theme={{
        columns: cols,
        highpoint: height,
        breakColumns: breakpoint,
        imgWidth,
        formsHeight,
      }}
    >
      <MainFormContainer>
        <Figure>
          <Img src={src} />
        </Figure>

        <FormContainer>
          <Form>
            <Input placeholder="Email" type={'email'} />
            <Input placeholder="Username" type={'text'} />
            <Input placeholder="Password" type={'password'} />
            <Button>{textButton}</Button>
          </Form>
        </FormContainer>
      </MainFormContainer>
    </ThemeProvider>
  );
};

export default SignUpForm;
