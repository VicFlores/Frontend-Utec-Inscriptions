import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import {useRouter} from 'next/router'
import { setCookies } from 'cookies-next';
import { useForm, SubmitHandler } from "react-hook-form";
import { TForm } from '../../types/TForm';
import {
  Button,
  Figure,
  Form,
  Img,
  Input,
  MainFormContainer,
  FormContainer,
  Error,
  ErrorField,
} from '../GlobalComponents/GlobalStyles';
import { loginUser } from '../../utils/users';
import { verifyAuth } from '../../utils/verifyAuth';

type Inputs = {
  email: string,
  password: string
};

const LoginForm = ({
  src,
  textButton,
  cols,
  height,
  breakpoint,
  imgWidth,
  formsHeight,
}: TForm) => {

  const router = useRouter()

  const [message, setMessage] = useState<string>('')  
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    setMessage('')
    const result = await loginUser(data)
    console.log(result.message);

    if (result.message){
      setMessage(result.message)
      return
    }
    setCookies('token', result.token);
    const resultDecoded = await verifyAuth(result.token);
  
    if (resultDecoded.permissions === 'manager'){
      router.push({
        pathname: '/manager'
      })
      return
    }
    router.push({
      pathname: '/student'
    })
      
  }

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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input placeholder="email" type={'email'} {...register("email", { required: true })} />
            {errors.email && <ErrorField>{errors.email.type}</ErrorField>}
            <Input placeholder="Password" type={'password'} {...register("password", { required: true })} />
            {errors.password && <ErrorField>{errors.password.type}</ErrorField>}
            <Button>{textButton}</Button>
            <Error>
              {message}
            </Error>
          </Form>
        </FormContainer>
      </MainFormContainer>
    </ThemeProvider>
  );
};

export default LoginForm;
