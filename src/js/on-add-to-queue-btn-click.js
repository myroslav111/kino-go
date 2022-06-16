
let arrayQueue = [];

// фун. додавання клікнутого фільму у локал сторедж
function onAddToQueueBtnClick(event){
    // event.preventDefault();
    if(arrayQueue.includes(event.target.id)){
        console.log("Такой фильм уже есть в списке");
        alert("Такой фильм уже есть в списке");
        return; 
    }
    arrayQueue.push(event.target.id);
    // console.log("arrayQueue", arrayQueue);  
    console.log("QUEUE - Фильм добавлен в список просмотренных фильмов");
    localStorage.setItem("queue", JSON.stringify(arrayQueue));
    // return arrayQueue;
}

export {onAddToQueueBtnClick}   
