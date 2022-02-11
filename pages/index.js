import ArtistCard from '../components/ArtistCard';
import Herobar from '../components/Herobar';
import MediaScroller from '../components/MediaScroller';
import Title from '../components/Title';
import data from '../store/data';

export default function Home() {
  return (
    <>
      <Herobar />
      {/* Editors picks scroller */}
      <Title text="Editor's Picks" />
      <MediaScroller data={data} />
      {/* Artists Cards Grid */}
      <section className="margin-top-5">
        <Title text="New Uploads Feb - 2022" />
        <section className="main-grid">
          {data.artists.map((artist) => (
            <ArtistCard artist={artist} key={artist.id} />
          ))}
        </section>
      </section>
    </>
  );
}
