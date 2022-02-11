import Link from 'next/link';

const PageUnderMaking = () => {
  return (
    <section className="container center-with-grid padding-top-25">
      <h1 className="font-heading">🙄</h1>
      <h1 className="font-heading color-red">
        Sorry We're Still Working On This!
        <br />
      </h1>
      <h2 className="font-subheading text-align-center">
        <Link href="mailto:hssnkizz@gmail.com" passHref>
          <a className="color-gray-500--hoverable text-decoration-underline ">
            Contact Administrator
          </a>
        </Link>
      </h2>
    </section>
  );
};

export default PageUnderMaking;
