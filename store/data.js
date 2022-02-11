// Importing Artist Profile Photos
import MarthaMukisa from '../public/artists/martha-mukisa.jpg';
import AllanToniks from '../public/artists/allan-toniks.jpg';
import Aroma from '../public/artists/aroma.jpg';
import NinaRoz from '../public/artists/nina-roz.jpg';
import Pallaso from '../public/artists/pallaso.jpg';
import Ntaate from '../public/artists/ntaate.jpg';
import WilsonBugembe from '../public/artists/wilson-bugembe.jpg';
import BobiWine from '../public/artists/bobi-wine.jpg';
import DavidLutalo from '../public/artists/david-lutalo.jpg';
import SerenaBata from '../public/artists/serena-bata.jpg';

// Importing poster Photos
import Follow from '../public/artists/posters/follow-John-Blaq.jpg';
import AmInLove from '../public/artists/posters/am-in-love-Shakira-Shakira.jpg';
import DoMe from '../public/artists/posters/do-me-Kataleya-and-Kandle.jpg';
import Loco from '../public/artists/posters/loco-Rema-and-Chike.jpg';
import Mbeelamu from '../public/artists/posters/mbeelamu-Karole-Kasita.jpg';
import Nsaba from '../public/artists/posters/nsaba-Pallaso.jpg';
import PersonalPerson from '../public/artists/posters/personal-person-Daddy-Andre.jpg';
import Tusimbudde from '../public/artists/posters/tusimbudde-Gravity.jpg';

//todo: fetch these from backend server... firestore!
//todo: use javascript to make a slug i.e url friendly name of artist, in lower casing and hyphen spaced!

const data = {
  artists: [
    {
      id: 1,
      numSongs: 1,
      latestSong: 'Busy',
      category: 'Afro Beat',
      rating: '4.5',
      numReviews: '10',
      downloads: '20',
      description: 'A popular artist!',
      name: 'Martha Mukisa',
      username: 'martha-mukisa',
      photo: MarthaMukisa,
      comments: 47,
    },
    {
      id: 2,
      numSongs: 4,
      latestSong: 'Akaama',
      category: 'Afro Beat',
      rating: '4.9',
      numReviews: '11',
      downloads: '25',
      description: 'Best hits artist!',
      name: 'Allan Toniks',
      username: 'allan-toniks',
      photo: AllanToniks,
      comments: 67,
    },
    {
      id: 3,
      numSongs: 12,
      latestSong: 'Tokisusa',
      category: 'Electronic Dancehall',
      rating: '5.5',
      numReviews: '16',
      downloads: '35',
      description: 'A great artist!',
      name: 'Aroma',
      username: 'aroma',
      photo: Aroma,
      comments: 37,
    },
    {
      id: 4,
      numSongs: 12,
      latestSong: 'Fire',
      category: 'Afro Beat',
      rating: '4.5',
      numReviews: '15',
      downloads: '27',
      description: 'A great artist!',
      name: 'Nina Roz',
      username: 'nina-roz',
      photo: NinaRoz,
      comments: 17,
    },
    {
      id: 5,
      numSongs: 51,
      latestSong: 'Sherry',
      category: 'Rnb',
      rating: '6.5',
      numReviews: '160',
      downloads: '206',
      description: 'King of the east!',
      name: 'Pallaso',
      username: 'pallaso',
      photo: Pallaso,
      comments: 7,
    },
    {
      id: 6,
      numSongs: 11,
      latestSong: 'Brag About God',
      category: 'Gospel',
      rating: '7.5',
      numReviews: '140',
      downloads: '204',
      description: 'good gospel artist!',
      name: 'Ntaate',
      username: 'ntaate',
      photo: Ntaate,
      comments: 147,
    },
    {
      id: 7,
      numSongs: 43,
      latestSong: 'Katonda Yabadde...',
      category: 'Gospel',
      rating: '9.5',
      numReviews: '10',
      downloads: '20',
      description: 'great gospel artist!',
      name: 'Pr. Wilson Bugembe',
      username: 'pr-wilson-bugembe',
      photo: WilsonBugembe,
      comments: 17,
    },
    {
      id: 8,
      numSongs: 71,
      latestSong: 'Ogenda',
      category: 'Dancehall',
      rating: '6.5',
      numReviews: '40',
      downloads: '60',
      description: 'Most influential artist!',
      name: 'Bobi Wine',
      username: 'bobi-wine',
      photo: BobiWine,
      comments: 47,
    },
    {
      id: 9,
      numSongs: 32,
      latestSong: 'Kabisi Ka Ndagala',
      category: 'Afro Beat',
      rating: '7.5',
      numReviews: '10',
      downloads: '20',
      description: 'great artist!',
      name: 'David Lutalo',
      username: 'david-lutalo',
      photo: DavidLutalo,
      comments: 47,
    },
    {
      id: 10,
      numSongs: 32,
      latestSong: "Single And It's Okay",
      category: 'Afro Beat',
      rating: '5.5',
      numReviews: '10',
      downloads: '23',
      description: 'great artist!',
      name: 'Serena Bata',
      username: 'Serena Bata',
      photo: SerenaBata,
      comments: 7,
    },
  ],
  posters: [
    {
      id: 1,
      posterName: 'follow-john-blaq',
      posterSong: 'Follow',
      posterArtist: 'John Blaq',
      posterImage: Follow,
      downloadCounts: '430',
    },
    {
      id: 2,
      posterName: 'do-me-kataleya-and-kandle',
      posterSong: 'Do Me',
      posterArtist: 'Kataleya & Kandle',
      posterImage: DoMe,
      downloadCounts: '232',
    },
    {
      id: 3,
      posterName: 'personal-person-daddy-andre-and-van-data',
      posterSong: 'Personal Person',
      posterArtist: 'Daddy Andre & Van Data',
      posterImage: PersonalPerson,
      downloadCounts: '132',
    },
    {
      id: 4,
      posterName: 'am-in-love-Shakira-Shakira-and-david-lutalo',
      posterSong: 'Am In Love',
      posterArtist: 'David Lutalo & Shakiraa Shakira',
      posterImage: AmInLove,
      downloadCounts: '321',
    },
    {
      id: 5,
      posterName: 'tusimbudde-gravity',
      posterSong: 'Tusimbudde',
      posterArtist: 'Gravity',
      posterImage: Tusimbudde,
      downloadCounts: '51',
    },
    {
      id: 6,
      posterName: 'nsaba-pallaso-and-ratigan',
      posterSong: 'Nsaba',
      posterArtist: 'Pallaso & Ratigan',
      posterImage: Nsaba,
      downloadCounts: '345',
    },
    {
      id: 7,
      posterName: 'loco-rema-and-chike',
      posterSong: 'Loco',
      posterArtist: 'Rema, Dj Harold & Chike',
      posterImage: Loco,
      downloadCounts: '245',
    },
    {
      id: 8,
      posterName: 'mbeeramu-karole-kasita-and-maker-breaker',
      posterSong: 'Mbeelamu',
      posterArtist: 'Karole Kasita & Dj Maker Breaker',
      posterImage: Mbeelamu,
      downloadCounts: '145',
    },
  ],
};

export default data;
