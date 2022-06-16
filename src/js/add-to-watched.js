let arrayWatched = [];

function addToWatched(event){
    // event.preventDefault();
    if(arrayWatched.includes(event.target.id)){
        console.log("Такой фильм уже есть в списке");
        alert("Такой фильм уже есть в списке");
        return;        
    }
    arrayWatched.push(event.target.id)
    // console.log("arrayWatched", arrayWatched);
    console.log("WATCHED - Фильм добавлен в список просмотренных фильмов");
    localStorage.setItem("watched", JSON.stringify(arrayWatched));
    // return arrayWatched;
}

export {addToWatched}   

