import Image from 'next/image';
import BgArt from '../public/bg-art.jpg';
import SearchBar from './SearchBar';

const Herobar = () => {
  return (
    <div className="herobar">
      <div className="container-art">
        <Image
          src={BgArt}
          alt="background art"
          className="background-art"
          layout="responsive"
        />
      </div>
      <div className="herobar-actions flex-column justify-content-center gap-2 padding-x-6">
        <SearchBar />
        <div className="buttons flex-row justify-content-between">
          <button className="button grow-1">#TBT</button>
          <button className="button grow-1">#Hot10</button>
          <button className="button grow-1">#MonthlySelection</button>
          <button className="button grow-1">#100%UG</button>
        </div>
      </div>
    </div>
  );
};

export default Herobar;
