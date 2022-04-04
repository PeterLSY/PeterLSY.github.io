alert(new Date());
function change(){
 var select = document.getElementById('demo');
 select.style.color='red';
 select.style.backgroundColor='yellow';
 select.style.fontFamily='Arial';
 select.innerHTML='cat';
 select.style.textAlign='center';
}

function sum1(){
 var a = parseFloat(prompt('first number:'));
 var b = parseFloat(prompt('second number:'));
 document.getElementById('lsy').innerHTML=a+b;
}

function sum2(){
 var a = prompt('First name:');
 var b = prompt('Second name');
 document.getElementById('hls').innerHTML='what is up?'+a;
}
sum2();

function happy(f){
    return (5/9) * (f-32);
}

function Sad(){
 document.getElementById('Sad').innerHTML = happy(20);
}