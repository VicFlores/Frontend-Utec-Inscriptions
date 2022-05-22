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

const InscriptionsForm = ({ src, textButton, cols, height }: TForm) => {
  return (
    <ThemeProvider theme={{ columns: cols, highpoint: height }}>
      <MainFormContainer>
        <Figure>
          <Img src={src} />
        </Figure>

        <FormContainer>
          <Form>
            <Input placeholder="Email" type={'email'} />
            <Input placeholder="Password" type={'password'} />
            <Button>{textButton}</Button>
          </Form>
        </FormContainer>
      </MainFormContainer>
    </ThemeProvider>
  );
};

export default InscriptionsForm;
