import React from 'react';
import InscriptionsTable from '../../components/inscriptionsTable/inscriptionsTable';
import Layout from '../../components/Layout/Layout';
import { CookieValueTypes } from 'cookies-next/lib/types'
import { getCookie } from 'cookies-next';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getInscriptions } from '../../utils/inscriptions';

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

  const result = await getInscriptions(token as string)

  return{props: {result, token}}
}


const InscriptionsCheck = ({result, token}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <InscriptionsTable data={result} token={token} />
    </Layout>
  );
};

export default InscriptionsCheck;
