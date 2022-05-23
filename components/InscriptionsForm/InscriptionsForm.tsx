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

const InscriptionsForm = ({
  src,
  textButton,
  cols,
  height,
  mt,
  imgWidth,
  formCol,
  formsHeight,
  btnColStart,
  btnColEnd,
}: TForm) => {
  return (
    <ThemeProvider
      theme={{
        columns: cols,
        highpoint: height,
        margin: mt,
        imgWidth,
        formCol,
        formsHeight,
        btnColStart,
        btnColEnd,
      }}
    >
      <MainFormContainer>
        <Figure>
          <Img src={src} />
        </Figure>

        <FormContainer>
          <Form>
            <Input placeholder="Name" type={'text'} />
            <Input placeholder="Lastname" type={'text'} />
            <Input placeholder="Age" type={'email'} />
            <Input placeholder="DNI" type={'text'} />
            <Input placeholder="NIT" type={'text'} />
            <Input placeholder="Country" type={'text'} />
            <Input placeholder="City" type={'text'} />
            <Input placeholder="Address" type={'text'} />
            <Input placeholder="CellPhone" type={'email'} />
            <Input placeholder="Graduated" type={'text'} />
            <Button>{textButton}</Button>
          </Form>
        </FormContainer>
      </MainFormContainer>
    </ThemeProvider>
  );
};

export default InscriptionsForm;
