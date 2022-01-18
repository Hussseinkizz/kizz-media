import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer flex-column flex-all-center padding-bottom-2 background-gray-900 padding-y-2">
      <div className="footer-links">
        <div className="navbar-items">
          <Link href="/about-us" className="navbar-item">
            <a className="navbar-link color-yellow--hoverable text-decoration-none">
              About Us
            </a>
          </Link>
          <Link href="/contact-us" className="navbar-item">
            <a className="navbar-link color-yellow--hoverable text-decoration-none">
              Contact Us
            </a>
          </Link>
          <Link href="/copyright-pollicy" className="navbar-item">
            <a className="navbar-link color-yellow--hoverable text-decoration-none">
              Copyright Pollicy
            </a>
          </Link>
        </div>
      </div>
      <div className="copyright color-gray-100">
        All rights reserved. &copy; Kizz Media 2022.
      </div>
    </footer>
  );
};

export default Footer;
