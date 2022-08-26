let elInput = $()
let elMoviesTemp = $("#template-movies-element").content;
let elMoviesList = $(".js-movies-list");


let renderMovies = (movies) => {
  let elMoviesWrapperFragment = document.createDocumentFragment();

  movies.forEach(movie => {
    let elNewMovies = elMoviesTemp.cloneNode(true);

    elNewMovies.querySelector(".card-img-top").src = movie.smallPoster;
    elNewMovies.querySelector(".card-title").textContent = movie.title;
    elNewMovies.querySelector(".card-category").textContent = movie.categories;
    elNewMovies.querySelector(".card-rating").textContent = movie.imdbRating + ` ⭐️` ;
    elNewMovies.querySelector(".card-min").textContent = movie.runtime + ` min`;
    elNewMovies.querySelector(".card-year").textContent = movie.year;
    elNewMovies.querySelector(".card-youtube-link").href = movie.trailer;

    elMoviesWrapperFragment.appendChild(elNewMovies);
  });

  elMoviesList.appendChild(elMoviesWrapperFragment);
}

renderMovies(movies);



let searchPerson = new RegExp(value, 'gi');

info.filter((movies) => movies.title.match(searchPerson));
 
