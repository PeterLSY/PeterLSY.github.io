function change(){
var css= document.getElementById('demo').style;
css.color="red";
css.fontSize='50px';
css.fontFamily='New Times Roman';
var html = document.getElementById('demo');
html.innerHTML ='2';

}
function sum(){
document.getElementById('new').innerHTML ="1+1";
}
function ftom(f){
return f/3.281;
}
var meter = ftom(20);
document.write(meter);
function sum2(){
	var a =parseFloat(prompt('first number:'));
	var b =parseFloat(prompt('second number:'));
    document.getElementById('sum').innerHTML = a+b;
}
