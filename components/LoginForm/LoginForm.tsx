import React from 'react';
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

const LoginForm = ({ src, textButton, cols, height }: TForm) => {
  return (
    <MainFormContainer theme={{ columns: cols, highpoint: height }}>
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
  );
};

export default LoginForm;
