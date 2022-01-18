import Herobar from '../components/Herobar';
import ProfileCard from '../components/ProfileCard';
import Title from '../components/Title';
import data from '../store/data';

export default function Home() {
  return (
    <>
      <Herobar />
      <Title text="New Uploads Jan - 2022" />
      <section className="cards-grid">
        {data.artists.map((artist) => (
          <ProfileCard artist={artist} key={artist.id} />
        ))}
      </section>
    </>
  );
}
