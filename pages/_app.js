import 'serato-css/serato.css';
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
