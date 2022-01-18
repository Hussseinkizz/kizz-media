import Link from 'next/link';
import { useStore } from '../store/store';

const Appbar = () => {
  const {
    state: { darkMode },
    dispatch,
  } = useStore();

  const darkModeChangeHandler = () => {
    dispatch({
      type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON',
    });
    // use js-cookie package to persist darkmode value in browser after refresh, yarn add js-cookie and uncomment the codeblocks below!
    // const newDarkMode = !darkMode;
    // Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
  };

  return (
    <header className="flex-row position-sticky padding-x-2 background-gray-800 color-white appbar-header">
      {/* Header Nav */}
      <nav className="flex-row justify-content-between align-items-center padding-x-2 padding-y-2 appbar-nav">
        {/* Nav Left eg. Brand */}
        <div className="nav-left appbar-nav-item">
          <Link href="/">
            <a className="nav-link">
              <h2 className="font-bold font-size-large">Next Amazona</h2>
            </a>
          </Link>
        </div>
        {/* nav Right eg. Icons, menu or buttons */}
        <div className="nav-right appbar-nav-item">
          {/* Dark Mode Switch */}
          <button
            className="darkmode-switch button-dark"
            onClick={darkModeChangeHandler}
          >
            {darkMode ? '🌚' : '🌞'}
          </button>
          <Link href="/cart">
            <a className="nav-link iconic-link">cart</a>
          </Link>
          <Link href="/login">
            <a className="nav-link iconic-link">login</a>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Appbar;
