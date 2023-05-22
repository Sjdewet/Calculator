let displayEl = document.querySelector('#display')

let button = Array.from(document.getElementsByClassName('buttons'));

button.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'AC':
                displayEl.innerText = '';
                break;

                case'DEL':
                if(displayEl.innerText){
                displayEl.innerText = displayEl.innerText.slice(0, -1);
            }
            break; 
            case '=':
                try{
                    displayEl.innerText = eval(displayEl.innerText);
                } catch {
                    displayEl.innerText = 'Error!'
                }
                break; 
                default:
                displayEl.innerText += e.target.innerText;
        }
    });
});
  


 