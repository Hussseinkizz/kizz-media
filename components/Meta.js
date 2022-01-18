import Head from 'next/head';

//todo: use next-seo package for this!

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <link
        rel="shortcut icon"
        href="/public/favicon.ico"
        type="image/x-icon"
      />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: 'Kizz Media',
  keywords: 'Uganda, mp3, new music download, Kizz Media',
  description: 'A new site to download music for free, all new!',
};

export default Meta;
