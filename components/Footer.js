import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer flex-column flex-all-center padding-bottom-2 padding-y-2">
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
      <h3>
        Made With 💗 By
        <Link href="mailto:hssnkizz@gmail.com" passHref>
          <a className="color-gray-500--hoverable text-decoration-none margin-x-1">
            Kizz
          </a>
        </Link>
      </h3>
      <div className="copyright color-gray-100">
        All rights reserved. &copy; Kizz Media 2022.
      </div>
    </footer>
  );
};

export default Footer;
