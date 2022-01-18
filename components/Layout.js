// import { useStore } from '../store/store';
import Meta from './Meta';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  // const { state } = useStore();
  // const { darkMode } = state;

  return (
    <>
      <Meta />
      {/* Using a custom layout */}
      <div className="app">
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
