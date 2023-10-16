//elementos

const input = document.querySelector('input');
const lista= document.querySelector('ul');



function handlekeyup(e) {
    if (e.key === 'Enter') {
        
       //lista.innerHTML += '<li>' + input.value + '</li>';(prooblema de rendirecionamento dos itens)
       //or
       const newLi = document.createElement('li');
       newLi.innerHTML = input.value;
       lista.appendChild(newLi);

       input.value  = ''; //para zerar o campo input
    }
}
//eventos 

input.addEventListener('keyup',handlekeyup);
//git