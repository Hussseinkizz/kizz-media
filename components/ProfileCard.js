import Image from 'next/image';
import Link from 'next/link';
import * as IoIcons from 'react-icons/io5';

const ProfileCard = ({ artist }) => {
  const { latestSong, name, photo, username } = artist;

  return (
    <div className="card">
      <div className="card-media">
        {/* card image & artist profile link */}
        <Link href={`/artist/${username}`}>
          <a className="image-link">
            <Image
              src={photo}
              alt={name}
              title={name}
              layout="responsive"
              className="avatar-large border-radius-circle"
            />
          </a>
        </Link>
      </div>
      <div className="card-content">
        <h2>{name}</h2>
        <h3 className="color-orange">{latestSong}</h3>
      </div>
      <div className="card-footer">
        <IoIcons.IoChatbubbleOutline className="iconic-button--no-background font-size-icon color-yellow--hoverable" />
        <button className="button-warning">Download</button>
        <IoIcons.IoShareSocial className="iconic-button--no-background font-size-icon color-yellow--hoverable" />
      </div>
    </div>
  );
};

export default ProfileCard;
