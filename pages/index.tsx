import React from 'react';
import Homecontent from '../components/HomeContent/Homecontent';
import Homemain from '../components/HomeMain/Homemain';
import Layout from '../components/Layout/Layout';

const index = () => {
  return (
    <Layout>
      <Homemain urlImage='https://res.cloudinary.com/dohkdu219/image/upload/v1653262946/utec-inscriptions/homeImage_qpmttp.png' />
      <Homecontent></Homecontent>
    </Layout>
  );
};

export default index;
