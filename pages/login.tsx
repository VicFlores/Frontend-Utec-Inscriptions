import React from 'react';
import Layout from '../components/Layout/Layout';
import LoginForm from '../components/LoginForm/LoginForm';

function login() {
  return (
    <div>
      <Layout>
        <LoginForm
          src="https://res.cloudinary.com/vicflores11/image/upload/v1653237006/undraw_secure_login_pdn4_xfisbg.png"
          cols="repeat(2, 400px)"
          textButton="Join"
          height="90vh"
          breakpoint="300px"
          imgWidth="100%"
          formsHeight="350px"
        />
      </Layout>
    </div>
  );
}

export default login;
