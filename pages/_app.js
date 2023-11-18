import(`../public/default/css/globals.scss`);

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '@Components/layout';
import Helper from '@Helpers/index';

function MyApp({ Component, pageProps }) {
  const [csrfToken, setCsrfToken] = useState('');
  useEffect(() => {
    axios.get('/api/getCsrfToken')
      .then((res) => {
        const dkey = Helper.verifyJwt(res.data.csrfToken);
        setCsrfToken(dkey.key);
        document.cookie = `csrfToken=${res.data.csrfToken}; path=/`;
      })
      .catch((error) => {
        console.error('Failed to fetch CSRF token:', error);
      });
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
