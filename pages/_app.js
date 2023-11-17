import(`../public/default/css/globals.scss`);

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const [csrfToken, setCsrfToken] = useState('');
  useEffect(() => {

  }, []);

  return (
    <>
      <Component {...pageProps} />
    </>

  );
}

export default MyApp;
