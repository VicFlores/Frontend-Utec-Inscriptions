import React from 'react';
import InscriptionsForm from '../components/InscriptionsForm/InscriptionsForm';
import Layout from '../components/Layout/Layout';

function Inscriptions() {
  return (
    <div>
      <Layout>
        <InscriptionsForm
          src="https://res.cloudinary.com/vicflores11/image/upload/v1653255681/undraw_text_field_htlv_ok6ufw.png"
          cols="400px"
          textButton="Inscribe"
          height="0"
        />
      </Layout>
    </div>
  );
}

export default Inscriptions;
