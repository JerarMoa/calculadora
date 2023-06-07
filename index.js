const pantalla = document.querySelector('.valorIngresado');
const resultado = document.querySelector('.resultado');
const btns = document.querySelectorAll('button')
const operaciones = document.querySelectorAll('.tecla');


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const valorBtn = btn.value;

        switch (btn.value) {
            case '=':
                resultado.textContent = `=${eval(pantalla.textContent)}`;
                break;

            case 'c':
                resultado.textContent = '';
                pantalla.textContent = '0';
                break;

            case 'borrar':
                pantalla.textContent = pantalla.textContent.slice(0, -1)
                break;

            case '.':
                if (!pantalla.textContent.includes('.')) {
                    pantalla.textContent += valorBtn;
                }
                break;

            default:
                if (pantalla.textContent === '0') {
                    pantalla.textContent = valorBtn;
                } else {
                    pantalla.textContent += valorBtn;
                }
        }

    })
})
