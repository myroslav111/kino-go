let arrayWatched = [];

function addToWatched(event, id){
    // event.preventDefault();
    arrayWatched.push(id);
    console.log("arrayWatched", arrayWatched);
    // console.log('addToWatched', event.target);
    console.log("WATCHED - Фильм добавлен в список просмотренных фильмов");
    // localStorage.setItem('watched', i);
   
}

export {addToWatched}   

