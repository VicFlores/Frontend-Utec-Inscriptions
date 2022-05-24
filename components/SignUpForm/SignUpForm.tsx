import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { useForm, SubmitHandler } from "react-hook-form";
import {useRouter} from 'next/router'
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
  ErrorField
} from '../GlobalComponents/GlobalStyles';
import { signupUser } from '../../utils/users';


type Inputs = {
  email: string
  username: string
  password: string
  permissions: string
};

const SignUpForm = ({
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
    data.permissions = 'student'
    setMessage('')
    const result = await signupUser(data)
    if (result.message == 'New user created'){
      router.push({
        pathname: '/login'
      })
      return
    }
    if (result.message){
      setMessage(result.message)
      return
    }
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
            <div>
              <Input placeholder="Email" type={'email'} {...register("email", { required: true })} />
              {errors.email && <ErrorField>{errors.email.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="Username" type={'text'} {...register("username", { required: true })} />
              {errors.username && <ErrorField>{errors.username.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="Password" type={'password'} {...register("password", { required: true })} />
              {errors.password && <ErrorField>{errors.password.type}</ErrorField>}
            </div>
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

export default SignUpForm;
