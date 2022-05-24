import React from 'react';
import InscriptionsTable from '../../components/inscriptionsTable/inscriptionsTable';
import Layout from '../../components/Layout/Layout';

const InscriptionsCheck = () => {
  return (
    <Layout show="none" textButton="Logout">
      <InscriptionsTable />
    </Layout>
  );
};

export default InscriptionsCheck;
