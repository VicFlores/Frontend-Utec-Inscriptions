import React from 'react';
import DashboardCard from '../../components/DashboardCard/DashboardCard';
import Layout from '../../components/Layout/Layout';
import { getCookie } from 'cookies-next';
import { CookieValueTypes } from 'cookies-next/lib/types'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getInscription } from '../../utils/inscriptions';
import { verifyAuth } from '../../utils/verifyAuth';

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

  const resultDecoded = await verifyAuth(token as string);

  let result = await getInscription(resultDecoded.id as string, token as string)
  console.log(result);
  if(result.message){
    result = {}
  }
  
  return{props: {result}}

}

const Dashboard = ({result}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Layout>
      <DashboardCard data={result} />
    </Layout>
  );
};

export default Dashboard;
