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
  ErrorField,
} from '../GlobalComponents/GlobalStyles';
import { addInscriptions } from '../../utils/inscriptions';
import { verifyAuth } from '../../utils/verifyAuth';

type Inputs = {
  name: string
  lastname: string
  age: number
  dni: string
  nit: string
  country: string
  city: string
  address: string
  cellphone: string
  graduated: string
};

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
  token
}: TForm) => {

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
  const [message, setMessage] = useState<string>('')  
  const router = useRouter()

  const onSubmit: SubmitHandler<Inputs> = async(data) => {
    setMessage('')
    data.age = Number(data.age)
    const result = await addInscriptions(data, token)
    if (result.message == 'New inscription created'){
      router.push({
        pathname: '/student'
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input placeholder="Name" type={'text'} {...register("name", { required: true })} />
              {errors.name && <ErrorField>{errors.name.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="Lastname" type={'text'} {...register("lastname", { required: true })} />
              {errors.lastname && <ErrorField>{errors.lastname.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="Age" type={'number'} {...register("age", { required: true })} />
              {errors.age && <ErrorField>{errors.age.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="DNI" type={'text'} {...register("dni", { required: true })} />
              {errors.dni && <ErrorField>{errors.dni.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="NIT" type={'text'} {...register("nit", { required: true })} />
              {errors.nit && <ErrorField>{errors.nit.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="Country" type={'text'} {...register("country", { required: true })} />
              {errors.country && <ErrorField>{errors.country.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="City" type={'text'} {...register("city", { required: true })} />
              {errors.city && <ErrorField>{errors.city.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="Address" type={'text'} {...register("address", { required: true })} />
              {errors.address && <ErrorField>{errors.address.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="CellPhone" type={'text'} {...register("cellphone", { required: true })} />
              {errors.cellphone && <ErrorField>{errors.cellphone.type}</ErrorField>}
            </div>
            <div>
              <Input placeholder="Graduated" type={'text'} {...register("graduated", { required: true })} />
              {errors.graduated && <ErrorField>{errors.graduated.type}</ErrorField>}
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

export default InscriptionsForm;
