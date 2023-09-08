let string="";
let buttons = document.querySelectorAll('.btn');
let input=document.querySelector('.input');
let arr = Array.from(buttons);
arr.forEach((buttone) => {
    buttone.addEventListener('click',(e) =>{
 if(e.target.innerHTML ==  '='){
    string = eval(string);
    input.value= string;
 }
 else if (e.target.innerHTML == 'AC'){
   string ="";
   input.value= string;
 }
 else if (e.target.innerHTML == 'DE'){
   string= string.slice(0,-1);
   input.value= string;
 }
 else{
    string += e.target.innerHTML;
    input.value=string;
 }
 })
})



