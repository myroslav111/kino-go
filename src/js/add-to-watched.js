
let i=1;
function addToWatched(event){
    event.preventDefault();
    console.log('addToWatched', event.target);
     console.log("WATCHED - Фильм добавлен в список просмотренных фильмов");
    localStorage.setItem('watched', i);
    i+=1;
}

export {addToWatched}   

