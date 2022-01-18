import Photo1 from '../public/images/myPic.jpg';

//todo: fetch these from backend server... firestore!
//todo: use javascript to make a slug i.e url friendly name of artist, in lower casing and hyphen spaced!

const data = {
  artists: [
    {
      id: 1,
      numSongs: 1,
      latestSong: 'Nkulowooza',
      category: 'Rnb',
      rating: '4.5',
      numReviews: '10',
      downloads: '20',
      description: 'A popular artist!',
      name: 'Hussein Kizz',
      username: 'hussein-kizz',
      photo: Photo1,
      comments: 47,
    },
    {
      id: 2,
      numSongs: 4,
      latestSong: 'Love Bet',
      category: 'Reggae',
      rating: '4.9',
      numReviews: '11',
      downloads: '25',
      description: 'Best reggae artist!',
      name: 'D Major',
      username: 'dmajor',
      photo: Photo1,
      comments: 67,
    },
    {
      id: 3,
      numSongs: 12,
      latestSong: 'Seekle Down',
      category: 'Dancehall',
      rating: '5.5',
      numReviews: '16',
      downloads: '35',
      description: 'A dancehall artist!',
      name: 'Beenie Gunter',
      username: 'beenie-gunter',
      photo: Photo1,
      comments: 37,
    },
    {
      id: 4,
      numSongs: 12,
      latestSong: 'Mulembe Gwa Kirya',
      category: 'Soul',
      rating: '4.5',
      numReviews: '15',
      downloads: '27',
      description: 'A Soul artist!',
      name: 'Maurice Kirya',
      username: 'maurice-kirya',
      photo: Photo1,
      comments: 17,
    },
    {
      id: 5,
      numSongs: 51,
      latestSong: 'Bye Mucheveni',
      category: 'Hiphop',
      rating: '6.5',
      numReviews: '160',
      downloads: '206',
      description: 'King of lugaflow!',
      name: 'Jim Nola Mc',
      username: 'jimnola-mc',
      photo: Photo1,
      comments: 7,
    },
    {
      id: 6,
      numSongs: 41,
      latestSong: 'Yolo',
      category: 'Dancehall',
      rating: '7.5',
      numReviews: '140',
      downloads: '204',
      description: 'Best Female artist!',
      name: 'Queen Sheebah',
      username: 'queen-sheebah',
      photo: Photo1,
      comments: 147,
    },
  ],
};

export default data;
