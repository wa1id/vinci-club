import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Layout } from 'src/components/Layout';
import { Outfit } from '@next/font/google';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CookieConsent, {
  Cookies,
  getCookieConsentValue
} from 'react-cookie-consent';
import { initGA } from 'src/utils/ga-utils';
import { useEffect } from 'react';

const outfit = Outfit({ subsets: ['latin'] });

function App({ Component, pageProps }: AppProps) {
  const handleAcceptCookie = () => {
    initGA('G-1P286E2MXV');
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove('_ga');
    Cookies.remove('_gat');
    Cookies.remove('_gid');
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === 'true') {
      handleAcceptCookie();
    }
  }, []);

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${outfit.style.fontFamily};
        }
      `}</style>
      <Layout>
        <ToastContainer />
        <CookieConsent
          location="none"
          onAccept={handleAcceptCookie}
          onDecline={handleDeclineCookie}
          buttonText={'Accepteer'}
          cookieName="gdprCookie"
          style={{
            background: 'white',
            color: 'black',
            zIndex: '99999'
          }}
          buttonStyle={{
            background: 'black',
            color: 'white',
            fontSize: '18px'
          }}
          declineButtonStyle={{
            background: 'transparent',
            fontSize: '14px',
            color: 'black'
          }}
          ariaAcceptLabel="Accepteer"
          expires={150}
          hideOnAccept
          enableDeclineButton
          declineButtonText="weiger"
          overlayClasses="overlayclass"
          overlay={true}
        >
          Onze website gebruikt cookies om uw ervaring te verbeteren. Door op
          &quot;Accepteer&quot; te klikken, gaat u akkoord met het gebruik van
          alle cookies.
        </CookieConsent>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithTranslation(App);
