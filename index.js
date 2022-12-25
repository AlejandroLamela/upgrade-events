// !Iteración #1: Creando Events

// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click
 document.querySelector('#btnToClick').addEventListener("click",buttonClick);

 function buttonClick (event) {
    console.log(event);
 }


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

document.querySelector('.focus').addEventListener('focus', readFocus);


function  readFocus(event){
console.log(event.target.value);
}
// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

let inputEvent$$ = document.querySelector('.value');
inputEvent$$.addEventListener("input", function (event){
    console.log(event.target.value);
})