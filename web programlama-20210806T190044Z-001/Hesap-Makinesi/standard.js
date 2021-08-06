function focusToInput(){
  document.getElementById("Value").focus();
}
function deleteInput(){
  var exp=document.form.result.value;
  document.form.result.value = exp.substring(0,exp.length-1);
  focusToInput();
}
function resetle(){
    document.getElementById("Value").value="";
    document.getElementById("result").innerText="";
    grandTotal=0;
}
var grandTotal=0;

function hesapla(e)
{
    ıncomingValue=document.getElementById("Value").value;
   
    if(ıncomingValue=="")
    {
        ıncomingValue=0; 
    }
  if(e=="+")
  {
    grandTotal=parseFloat(grandTotal)+parseFloat(ıncomingValue);
    focusToInput();
  }
  else if(e=="-")
  {
    grandTotal=parseFloat(grandTotal)-parseFloat(ıncomingValue);
    focusToInput();
  }
  else if(e=="*")
  {
    if(grandTotal == "" || grandTotal=="0" || ıncomingValue=="" || ıncomingValue=="0"){
        grandTotal=1;
    }
    grandTotal=parseFloat(grandTotal)*parseFloat(ıncomingValue);
    focusToInput();
  }
  else if(e=="/")
  {    
    if(ıncomingValue==0){
        alert("Error! This can not to divided by zero");
        return;
    }
    grandTotal=parseFloat(grandTotal)/parseFloat(ıncomingValue);
    focusToInput();
  }
  else if(e=="%")
  {  

    console.log(ıncomingValue);
    grandTotal=parseFloat(grandTotal)%parseFloat(ıncomingValue);
    focusToInput();
  }

document.getElementById("Value").value="";
document.getElementById("result").innerText=grandTotal;

console.log(ıncomingValue.length);
}

function random(){
    var randomNumber = Math.floor(Math.random() * 1000000);
    document.getElementById("result").innerText=randomNumber;
    
}

function decPoint(){
    var decValue=document.getElementById("Value").value;
    var decimalPoint = parseFloat(decValue).toFixed(2);
    document.getElementById("result").innerText = decimalPoint;
}

function afterDecimal(){
    var inputAfterDec = document.getElementById("Value").value;
    var afterDec = parseFloat(inputAfterDec.toString().split(".")[1]);
    document.getElementById("result").innerText = afterDec;
}

function beforeDecimal(){
  var inputBeforeDec = document.getElementById("Value").value;
  var beforeDec = parseFloat(inputBeforeDec.toString().split(".")[0]);
  document.getElementById("result").innerText = beforeDec;
}

function numberOfDigit(){
    var numberofdigit = document.getElementById("Value").value.length;
    console.log(document.getElementById("Value").value.length);
    document.getElementById("result").innerText="There are "+numberofdigit+" digits";
    focusToInput();
}
