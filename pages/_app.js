import '../styles/serato-v1-0-3.min.css';
import '../styles/globals.css';
import Layout from '../components/Layout.js';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
