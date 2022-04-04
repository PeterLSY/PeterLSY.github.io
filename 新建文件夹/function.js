function change(){
document.getElementById('one').innerHTML = 'I am batman';
}
function happy(){
 document.getElementById('img').src ='https://s7d4.scene7.com/is/image/WolverineWorldWide/S20595-30_1?wid=584&hei=484&fmt=jpeg&qlt=80,0&op_sharpen=0&resMode=sharp2&op_usm=.5,1,1,0&iccEmbed=0&printRes=72';
}
function good(){
 var css = document.getElementById('three').style;
 css.backgroundColor ='yellow';
 css.fontFamily ='Arial';
 css.textAlign ='center';
}
alert(Date())

function sum(){
 var a = prompt('first name:');
 var b = prompt('second name:');
 var c = ('Nice to meet you ')
 document.getElementById('five').innerHTML=c+a+b;
}

function sum1(){
 var a = parseFloat(prompt('first number:'));
 var b = parseFloat(prompt('second number:'));
 document.getElementById('six').innerHTML=a+b;
}


function q6more(f){
 return (5/9) * (f-32);
}
function q6(){
 document.getElementById('q6').innerHTML = q6more(20);
}