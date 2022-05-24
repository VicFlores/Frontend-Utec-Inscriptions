import React from 'react';
import InscriptionsForm from '../../components/InscriptionsForm/InscriptionsForm';
import Layout from '../../components/Layout/Layout';
import { CookieValueTypes } from 'cookies-next/lib/types'
import { getCookie } from 'cookies-next';
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'


export const getServerSideProps:GetServerSideProps = async (context) => {
  const { req, res } = context
  const token: CookieValueTypes = getCookie('token', { req, res })
  if(!token){
    return {
      redirect:{
        destination: '/login',
        permanent: false
      }
    }
  }

  return{props: { token }}
}



function Inscriptions({token}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <Layout>
        <InscriptionsForm
          src="https://res.cloudinary.com/vicflores11/image/upload/v1653255681/undraw_text_field_htlv_ok6ufw.png"
          cols="626px"
          textButton="Inscribe"
          mt="60px"
          imgWidth="500px"
          formCol="repeat(2, 1fr)"
          formsHeight="500px"
          btnColStart="1"
          btnColEnd="3"
          token={token}
        />
      </Layout>
    </div>
  );
}

export default Inscriptions;
