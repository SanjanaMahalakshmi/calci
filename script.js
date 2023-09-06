function addition(a,b){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    document.getElementById("outputbox").innerHTML=a+b;
}
function subtraction(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    document.getElementById("outputbox").innerHTML=a-b;
}
function multiplication(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    document.getElementById("outputbox").innerHTML=a*b;
}
function division(){
    var a=parseInt(document.getElementById("num1").value);
    var b=parseInt(document.getElementById("num2").value);
    document.getElementById("outputbox").innerHTML=a/b;
}