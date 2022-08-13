let a = ''; // first number
let b = ''; // second number
let sign = ''; // operation
let finish = false;

const digit = ['0', '1', '2', '3','4','5','6','7','8','9','.'];
const action = ['-', '+','×','÷'];

// screen
const out = document.querySelector('.screen_input p');

function clearAll () {
    a = ''; //first number and result
    b = ''; // second number
    sign = '';
    finish = false;
    out.textContent = 0;

}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.numbers').onclick = (event) => {
    // dont click button
    if(!event.target.classList.contains('btn'))return;
    // btn ac was clicked
    if(event.target.classList.contains('ac'))return;

    out.textContent = '';
    // to receive clicked button by user
    const key = event.target.textContent

    // proverka kakayz knopka najata 0-9 or .

    if (digit.includes(key)) {
        if (b ==='' && sign === '') {
            a+=key;
            
            out.textContent = a;
        }
        else if (a !=='' && b!=='' && finish){
            b = key;
            finish = false;
            out.textContent = b;
        }
        else {
            b += key;
            out.textContent = b;
        }
        console.log(a,b,sign);
        return;
    }

    // if + - / * was clicked
    if (action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.log(a,b,sign);
        return
    }

    // equal was clicked

    if (key === '=') {
        if (b === '') b = a;
        switch (sign) {
            case '+':
                a = (+a) + (+b);
                break;
            case '-':
                a = a - b;
                break;
            case '×':
                a = a * b;
                break;
            // case '%':
            //     a = a * b;
            //     break;
            case '÷':
                if (b === '0') {
                    out.textContent = 'Ошибка';
                    a ='';
                    b ='';
                    sign ='';
                    return
                }        
                a = (a / b).toFixed(2);
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a,b,sign)
    }


}
