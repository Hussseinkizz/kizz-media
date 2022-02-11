// import Image from 'next/image';
import Link from 'next/link';
// import Logo from '../public/serato.svg';
import * as IoIcons from 'react-icons/io5';

const Header = () => {
  return (
    <header className="header color-yellow">
      <nav className="navbar">
        <div className="navbar-start">
          <div className="navbar-brand">
            {/* <Image
              src={Logo}
              alt="serato css logo"
              className="navbar-logo"
              width="32"
              height="32"
            /> */}
            <Link href="/">
              <a className="navbar-link color-yellow--hoverable">Kizz Media</a>
            </Link>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-icons">
            <Link href="https://youtube.com/kizzmedia">
              <a target="_blank">
                <IoIcons.IoLogoYoutube className="iconic-button--no-background font-size-icon color-red--hoverable" />
              </a>
            </Link>
            <Link href="https://twitter.com/kizzmedia">
              <a target="_blank">
                <IoIcons.IoLogoTwitter className="iconic-button--no-background font-size-icon color-blue--hoverable" />
              </a>
            </Link>
            <Link href="https://instagram.com/kizzmedia">
              <a target="_blank">
                <IoIcons.IoLogoInstagram className="iconic-button--no-background font-size-icon color-purple--hoverable" />
              </a>
            </Link>
          </div>
          <button className="button-warning">Upload Music</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
