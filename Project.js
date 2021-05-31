let number0fFilms = +prompt('Сколько фильмов вы уже посмотрели?')

let personalMovieDB = {
  count: number0fFilms,
  movies: {},
  acrors: {},
  genres: [],
  privat: false,
}

const a = prompt('Один из последних просмотренных фильмов?'),
  b = +prompt('Ваша оценка этому фильму'),
  c = prompt('Один из последних просмотренных фильмов?'),
  d = +prompt('Ваша оценка этому фильму')

personalMovieDB.movies[a] = b
personalMovieDB.movies[c] = d

console.log(personalMovieDB)
