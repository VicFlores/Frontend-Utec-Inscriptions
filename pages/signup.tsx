import React from 'react';
import Layout from '../components/Layout/Layout';
import SignUpForm from '../components/SignUpForm/SignUpForm';

const SignUp = () => {
  return (
    <div>
      <Layout>
        <SignUpForm
          src="https://res.cloudinary.com/vicflores11/image/upload/v1653335065/undraw_Mobile_payments_re_7udl_crpgs5.png"
          cols="repeat(2, 400px)"
          textButton="SignUp"
          height="90vh"
          breakpoint="300px"
          imgWidth="100%"
          formsHeight="350px"
        />
      </Layout>
    </div>
  );
};

export default SignUp;
