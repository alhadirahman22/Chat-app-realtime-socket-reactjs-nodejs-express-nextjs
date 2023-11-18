import(`../public/default/css/globals.scss`);

import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import Layout from '@Components/layout';
import Helper from '@Helpers/index';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const [csrfToken, setCsrfToken] = useState('');
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
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

  const authCheck = useCallback(async (url) => {
    const Userdata = Helper.getLocalStorage('userData', null, true);
    const publicPaths = ['/'];
    const path = url.split('?')[0];
    if (Userdata == undefined || Userdata == null || Userdata == '') {
      if (!publicPaths.includes(path)) {
        setAuthorized(false);
        router.push({
          pathname: '/',
        });
      }
      else {
        setAuthorized(true);
      }
    }
    else {
      if (publicPaths.includes(path)) {
        router.push({
          pathname: Userdata.room,
        });
      }
      else {
        setAuthorized(true);
      }
    }
  }, [router]);

  useEffect(() => {
    if (csrfToken != '') {
      authCheck(router.asPath);
      // on route change start - hide page content by setting authorized to false  
      const hideContent = () => setAuthorized(false);
      router.events.on('routeChangeStart', hideContent);

      // on route change complete - run auth check 
      router.events.on('routeChangeComplete', authCheck)

      return () => {
        router.events.off('routeChangeStart', hideContent);
        router.events.off('routeChangeComplete', authCheck);
      }
    }
  }, [csrfToken, router, authCheck]);

  return (
    <>
      <Layout>
        {/* <Component {...pageProps} /> */}
        {authorized && <Component {...pageProps} />}
      </Layout>
    </>

  );
}

export default MyApp;
