// var hamburger = document.querySelector('.hamburger__button');
// var mobile = document.querySelector('.mobile');

// function openMobile() {
//     mobile.classList.add('open');
// }

// function closeMobile() {
//     mobile.classList.remove('open');
// }

// hamburger.addEventListener('click', openMobile);
// hamburger.addEventListener('click', closeMobile);


// var luckyNubmber = 8;

// switch(luckyNubmber) {
//     case 1: 
//     console.log('is 1');
//     break;
//     case 8:
//     console.log('is 8');
//     break;
//     default:
//     console.log('defalult');
//     break;
// }

// var arr = [1,2,3,4,5,6]

// for(var i=0; i<arr.length; i++){
//   arr[i]= arr[i]+2;
// }

// console.log(arr)


var image1 = document.querySelectorAll('.dogimage');
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');

console.log(image1);

function openModal() {
backdrop.style.display = 'block';
modal.style.display = 'block';
}


function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none'; 
  }

  for (var i=0; i<image1.length; i++){
    image1[i].addEventListener('click', openModal);
  }
// image1[1].addEventListener('click', openModal);

// image1.onclick = openModal;
backdrop.addEventListener('click', closeModal);
