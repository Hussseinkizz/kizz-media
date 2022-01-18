import Image from 'next/image';
import BgArt from '../public/bg-art.jpg';

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
      <div className="herobar-actions flex-row justify-content-center">
        <button className="button">#TBT</button>
        <button className="button">#Hot10</button>
        <button className="button">#MonthlySelection</button>
        <button className="button">#100%UG</button>
      </div>
    </div>
  );
};

export default Herobar;
