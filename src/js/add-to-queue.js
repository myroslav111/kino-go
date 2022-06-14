function addToQueue(event){
    event.preventDefault();
    console.log('addToQueue', event.target);
    console.log("Фильм добавлен в список желаемых для просмотра");
  }

  export {addToQueue}   
