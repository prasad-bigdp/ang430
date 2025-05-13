import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  isDark = false;
  animes = [
    {
      id: 1,
      title: 'One Piece',
      year: 1999,
      genres: ['Action'],
      rating: 9,
      isRating: false,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTNjNGU4NTUtYmVjMy00YjRiLTkxMWUtNzZkMDNiYjZhNmViXkEyXkFqcGc@._V1_.jpg',
    },
    {
      id: 2,
      title: 'Naruto',
      year: 2002,
      genres: ['Adventure'],
      rating: 8.4,
      isRating: false,
      poster:
        'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSaP7aoBA63ypGcSZOn0tNipxn7S-WXs2ZSwGgTvbGy8Tvwg9Yc1ESLTSpaU3u3eK21VW9y',
    },
    {
      id: 3,
      title: 'Demon Slayer',
      year: 2019,
      genres: ['Action', 'Adventure'],
      rating: 8.6,
      isRating: false,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx4WiTvCIjnfkQSzU07H2epdXwuTMq_FMW-A&s',
    },
    {
      id: 4,
      title: 'Death Note',
      year: 2006,
      genres: ['Crime', 'Drama', 'Action'],
      rating: 8.9,
      isRating: false,
      poster:
        'https://m.media-amazon.com/images/M/MV5BYTgyZDhmMTEtZDFhNi00MTc4LTg3NjUtYWJlNGE5Mzk2NzMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 5,
      title: 'Pokemon',
      year: 1997,
      genres: ['Action', 'Adventure'],
      rating: 7.6,
      isRating: false,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/2/27/Pokemonseason1DVDBoxSet.jpg',
    },
    {
      id: 6,
      title: 'Dragon Ball',
      year: 1986,
      genres: ['Adventure'],
      rating: 8.8,
      isRating: false,
      poster:
        'https://m.media-amazon.com/images/M/MV5BN2VlNTdlMzQtYzE5OC00YmYwLTgyZTItYjEzMWY0ZDNjMTJhXkEyXkFqcGc@._V1_.jpg',
    },
    {
      id: 7,
      title: 'Solo Leveling',
      year: 2024,
      genres: ['Action', 'Sci-Fi'],
      rating: 8.7,
      isRating: false,
      poster:
        'https://m.media-amazon.com/images/I/81-PLxbqw0L._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 8,
      title: 'Attack on Titan',
      year: 2013,
      genres: ['Action'],
      rating: 9.1,
      isRating: false,
      poster: 'https://images.justwatch.com/poster/100348362/s718/season-1.jpg',
    },
    {
      id: 9,
      title: 'Vinland Saga',
      year: 2019,
      genres: ['Adventure'],
      rating: 8.6,
      isRating: false,
      poster:
        'https://m.media-amazon.com/images/M/MV5BNDA3MGNmZTEtMzFiMy00ZmViLThhNmQtMjQ4ZDc5MDEyN2U1XkEyXkFqcGc@._V1_.jpg',
    },
    {
      id: 10,
      title: 'Chainsaw Man',
      year: 2022,
      genres: ['Dark Fantasy'],
      rating: 8.6,
      isRating: false,
      poster:
        'https://m.media-amazon.com/images/I/71fJJQq2E4L._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 11,
      title: 'Sakamoto Days',
      year: 2019,
      genres: ['Action', 'Adventure', 'Comedy'],
      rating: 7.4,
      isRating: false,
      poster:
        'https://m.media-amazon.com/images/M/MV5BM2MwZDRmYWItNGIzZC00ZWExLWEwNWYtNmM1ZmU3OTA3NmY4XkEyXkFqcGc@._V1_.jpg',
    },
    {
      id: 12,
      title: 'Bleach',
      year: 2004,
      genres: ['Adventure'],
      rating: 8.5,
      isRating: false,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/thumb/7/72/Bleachanime.png/250px-Bleachanime.png',
    },
    {
      id: 13,
      title: 'Your Lie in April',
      year: 2014,
      genres: ['Drama', 'Mystery', 'Romance'],
      rating: 8.5,
      isRating: false,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/d/de/Your_Lie_in_April_Manga_cover.png',
    },
    {
      id: 14,
      title: 'Jujutsu Kaisen',
      year: 2020,
      genres: ['Drama', 'Action'],
      rating: 8.5,
      isRating: false,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAfnJ1SBDxBXdjuj9CAK06Ez8ieNyD3PVgmA&s',
    },
    {
      id: 15,
      title: 'Black Clover',
      year: 2017,
      isRating: false,
      genres: ['Animation', 'Adventure', 'Fantasy'],
      rating: 8.5,
      poster:
        'https://m.media-amazon.com/images/M/MV5BZmZkZjNhMWMtM2U0Mi00MjdlLTk3NmMtMTMwZjgwOTJmODMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 16,
      title: 'Spy × Family',
      year: 2019,
      genres: ['Drama', 'Thriller'],
      rating: 8.5,
      isRating: false,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzKrCOv1e_DdG2pATY9scwpQ8HiyZnWSggzA&s',
    },
    {
      id: 17,
      title: 'Blue Lock',
      year: 2022,
      genres: ['Sport', 'Drama', 'Thriller'],
      rating: 8.4,
      isRating: false,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqD8SmKVSQN-p4D28bdmvQ3-Zx0X53sA6anQ&s',
    },
    {
      id: 18,
      title: 'Spirited Away',
      year: 2001,
      genres: ['Animation', 'Adventure', 'Family'],
      rating: 8.6,
      isRating: false,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
    },
    {
      id: 19,
      title: 'Zom 100: Bucket List of the Dead',
      year: 2023,
      genres: ['Horror', 'Adventure'],
      rating: 8.6,
      isRating: false,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69BNlaGjCy6SpSP96S8Ywu7ZPqKAVmreXxA&s',
    },
    {
      id: 20,
      title: 'My Dress-Up Darling',
      year: 2022,
      genres: ['Romance', 'Drama', 'Fantasy'],
      rating: 7.6,
      isRating: false,
      poster:
        'https://image.tmdb.org/t/p/original/wzzLEUUrBT3Hr0FF9HrXxV6CsBF.jpg',
    },
    {
      id: 21,
      title: 'Haikyu!!',
      year: 2024,
      genres: ['Adventure', 'Comedy', 'Sport'],
      rating: 8.5,
      isRating: false,
      poster: 'https://upload.wikimedia.org/wikipedia/en/1/14/Haikyu_TV.jpg',
    },
    {
      id: 22,
      title: 'Tokyo Revengers',
      year: 2022,
      genres: ['Drama', 'Action'],
      rating: 8.4,
      isRating: false,
      poster:
        'https://assets.gadgets360cdn.com/pricee/assets/product/202302/Tokyo-Revenger-S2_1675424097.jpg',
    },
    {
      id: 23,
      title: 'High School DxD',
      year: 2012,
      genres: ['Comedy', 'Drama'],
      rating: 8.2,
      isRating: false,
      poster:
        'https://m.media-amazon.com/images/I/817RgobSrHL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      id: 24,
      title: 'My Hero Academia',
      year: 2016,
      genres: ['Action', 'Adventure', 'Sci-Fi'],
      rating: 8.2,
      isRating: false,
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0ihM3Bn6rg7opUx3HA9dfaiB2gRPvNIwdA&s',
    },
    {
      id: 25,
      title: 'Dororo',
      year: 2019,
      genres: ['Adventure', 'Drama'],
      rating: 8.2,
      isRating: false,
      poster:
        'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRxKkaFUACy15rrG01tY8C-3Gy4imGRVuZgd3wLQnNE6XO7bG9_mymlch_oZdFKvTAy2r3K',
    },
  ];

  change() {
    this.isDark = this.isDark ? false : true;
  }
  showHide(i:number) {
    if (this.animes[i].isRating) this.animes[i].isRating = false;
    else this.animes[i].isRating = true;
  }
}
