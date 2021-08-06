function focusToInput(){
    document.getElementById("Value").focus();
}

function reset(){
    document.getElementById("Value").value="";
    document.getElementById("result").innerText="";
    geneltoplam=0;
}

function deleteInput(){
    var exp=document.form.result.value;
    document.form.result.value = exp.substring(0,exp.length-1);
    focusToInput();
}

function binarytodecimal(){
    var binary;
    binary=document.getElementById("Value").value;
    document.getElementById("result").innerText=parseInt(binary,2);
}

function decimaltobinary(){ 
    var decimal=document.getElementById("Value").value;
    document.getElementById("result").innerText=Number(decimal).toString(2);
}

function hextodecimal(){
    var hex;
    hex=document.getElementById("Value").value;
    document.getElementById("result").innerText=parseInt(hex,16);
}

function decimaltohex(){
    var decimal=document.getElementById("Value").value;
    document.getElementById("result").innerText=Number(decimal).toString(16).toUpperCase();
}