const pikachu = document.querySelector('.pikachu');
const rock = document.querySelector('.rock');
let jumpCount = 0;

const jump = () => {
  if (!pikachu.classList.contains('jump')) {
    pikachu.classList.add('jump');

    setTimeout(() => {
      pikachu.classList.remove('jump');
    }, 500);

    const rockPosition = rock.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

    if (rockPosition <= 93 && rockPosition > 0 && pikachuPosition < 80) {
      jumpCount++;
      console.log(`Jump count: ${jumpCount}`);
    }
  }
};

const loop = setInterval(() => {
  const rockPosition = rock.offsetLeft;
  const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px', '');

  if (rockPosition <= 93 && rockPosition > 0 && pikachuPosition < 80) {
    rock.style.animation = 'none';
    rock.style.left = `${rockPosition}px`;

    rock.style.animation = 'none';
    rock.style.bottom = `${pikachuPosition}px`;

    setTimeout(() => {
      rock.style.animation = 'rock-animation 2s infinite linear'; // Adicione a classe de animação novamente após um pequeno atraso.
    }, 10);
  }
}, 10);

document.addEventListener('keydown', jump);
