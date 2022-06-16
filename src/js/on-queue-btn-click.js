function onQueueBtnClick(e){  
    // console.log(refs.showQueueBtn);
    const queueFilms = localStorage.getItem("queue");
    if(queueFilms === null){
        console.log("В списке QUEUE нет фильмов");
        alert("В списке QUEUE нет фильмов");
        return; 
    }
    console.log("queueFilms", queueFilms);
    console.log("Список ожидаемых к просмотру");
}

export {onQueueBtnClick}