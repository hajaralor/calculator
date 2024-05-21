const buttons = document.querySelectorAll('button');
const output = document.querySelector('.output');
const result = document.querySelector('.result')
buttons.forEach(button=>{
    button.addEventListener('click',calculate)
})
 function calculate(){
let buttonText=this.innerText
console.log(buttonText)
if (buttonText==="AC"){
   output.innerHTML="";
   result.innerHTML=0
}else if(buttonText==="DEL"){
    let end=output.innerText.length-1
output.innerHTML=output.innerHTML.substring(0,end)
}else if(buttonText==="="){
result.textContent=eval(output.innerText)
}else{
output.innerHTML+=buttonText
}
}
