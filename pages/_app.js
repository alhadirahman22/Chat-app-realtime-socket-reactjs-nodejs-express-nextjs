import(`../public/default/css/globals.scss`);

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@Components/layout';

function MyApp({ Component, pageProps }) {
  const [csrfToken, setCsrfToken] = useState('');
  useEffect(() => {

  }, []);

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

  );
}

export default MyApp;
