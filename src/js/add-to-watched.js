let arrayWatched = [];

function addToWatched(event){
    // document.querySelectorAll(".movie-header")
    console.dir(document.querySelectorAll(".movie-header"));
    event.preventDefault();
    // event.stopPropagation();
    // arrayWatched.push(id);
    console.log("arrayWatched", arrayWatched);

    // console.log('event.target', event.target);
    console.log("WATCHED - Фильм добавлен в список просмотренных фильмов");
    // localStorage.setItem('watched', i);
    return arrayWatched;
   
}

export {addToWatched}   

