const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // console.log(event);
    // console.log(event.target);
    if (event.target.id === 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'purple') {
      body.style.backgroundColor = event.target.id;
    }
    if (event.target.id === 'aqua') {
      body.style.backgroundColor = event.target.id;
    }
    // switch (event.target.id) {
    //   case 'grey':
    //     body.style.backgroundColor = event.target.id;
    //     break;
    //   case 'white':
    //     body.style.backgroundColor = event.target.id;
    //     break;
    //   case 'blue':
    //     body.style.backgroundColor = event.target.id;
    //     break;
    //   case 'yellow':
    //     body.style.backgroundColor = event.target.id;
    //     break;
    //   case 'purple':
    //     body.style.backgroundColor = event.target.id;
    //     break;
    //   case 'aqua':
    //     body.style.backgroundColor = event.target.id;
    //     break;
    //   default:
    //     body.style.backgroundColor = 'white';
    //     break;
    // }
  });
});
