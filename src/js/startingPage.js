import Notiflix from 'notiflix';

function startingPage() {
  //   document.querySelector('.video').classList.remove('hidden');
  console.log('1');
  setTimeout(() => {
    try {
      console.log('2');
      //   console.log(document.querySelector('.video'));
    } catch (error) {
      console.log('er');
      console.log(error);
    } finally {
      //   document.querySelector('.video').classList.add('hidden');
      console.log('3');
    }
  }, 6000);
  console.log('4');
}

// export { startingPage };
