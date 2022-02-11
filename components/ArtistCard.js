import Image from 'next/image';
import Link from 'next/link';
import * as IoIcons from 'react-icons/io5';

const ArtistCard = ({ artist }) => {
  const { latestSong, name, photo, username } = artist;

  return (
    <div className="artist-card">
      {/* card image & artist profile link */}
      <Link href={`/artist/${username}`}>
        <a className="image-link">
          <Image
            src={photo}
            alt={name}
            title={name}
            layout="responsive"
            className="artist-card-image border-radius-top-small"
          />
        </a>
      </Link>
      <div className="card-content">
        <h2>{name}</h2>
        <h3 className="color-orange">{latestSong}</h3>
      </div>
      <div className="card-footer">
        <div className="footer-icons icons">
          <IoIcons.IoChatbubbleOutline className="iconic-button--no-background font-size-icon color-yellow--hoverable" />
          <IoIcons.IoShareSocial className="iconic-button--no-background font-size-icon color-yellow--hoverable" />
        </div>
        <button className="button-warning">Download</button>
      </div>
    </div>
  );
};

export default ArtistCard;
