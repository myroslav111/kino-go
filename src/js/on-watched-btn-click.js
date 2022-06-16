function onWatchedBtnClick(e){
    //    console.log(refs.showWatchedBtn);
       const watchedFilms = localStorage.getItem("watched");
       if(watchedFilms === null){
        console.log("В списке WATCHED нет фильмов");
        alert("В списке WATCHED нет фильмов");
        return; 
       }
       console.log("watchedFilms", watchedFilms);
       console.log("Список просмотренных");
    }

    export {onWatchedBtnClick}