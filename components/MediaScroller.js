import Image from 'next/image';
import Link from 'next/link';
import * as IoIcons from 'react-icons/io5';

//Todo: Navigate to target song page onclick of media item, target song  is ideally satifying postersSong === artistSong

const MediaScroller = ({ data }) => {
  let { posters } = data;
  // let targetSong = 'foo';

  return (
    <section className="media-scroller snaps-inline">
      {posters.map((poster) => (
        <div className="media-item" key={poster.id}>
          {/* item image & temporary link */}
          <Link href="/page-under-making" passHref>
            <a className="image-link media-image-container">
              <Image
                src={poster.posterImage}
                alt={poster.posterName}
                title={`${poster.posterSong} - ${poster.posterArtist}}`}
                layout="responsive"
                className="media-item-image"
              />
            </a>
          </Link>
          <div className="media-item-content">
            <h2 className="flex align-items-center">
              <IoIcons.IoStar className="foo" />
              <span>{poster.posterSong}</span>
            </h2>
            <h3 className="color-green flex align-items-center">
              <IoIcons.IoPerson className="foo" />
              <span>{poster.posterArtist}</span>
            </h3>
            <h4 className="color-orange flex align-items-center">
              <IoIcons.IoCloudDownload className="foo" />
              <span>{poster.downloadCounts}</span>
              <span>Downloads</span>
            </h4>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MediaScroller;
