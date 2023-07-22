const pikachu = document.querySelector('.pikachu');
const rock = document.querySelector('rock');

const jump= () => {
    pikachu.classList.add('jump');

    setTimeout(() => {
        pikachu.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() =>{

    console.log('loop')

    const rockPosition = rock.offsetLeft;
    const pikachuPosition = +window.getComputedStyle(pikachu).bottom.replace('px','');

    console.log(pikachuPosition);

    if (rockPosition <= 93 && rockPosition > 0 && pikachuPosition < 80) {

        rock.style.animation = 'none';
        rock.style.left = `${rockPosition}px`;

        rock.style.animation = 'none';
        rock.style.bottom = `${pikachuPosition}px`;

    }

},10);

document.addEventListener('keydown', jump);