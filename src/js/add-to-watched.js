function addToWatched(event){
    event.preventDefault();
    console.log('addToWatched', event.target);
    console.log("Фильм добавлен в список просмотренных фильмов");
}

export {addToWatched}   

