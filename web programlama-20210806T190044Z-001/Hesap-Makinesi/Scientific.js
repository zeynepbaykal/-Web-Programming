function focusToInput(){
    document.getElementById("Value").focus();
}

function resetle(){
    document.getElementById("Value").value="";
    document.getElementById("result").innerText="";
    geneltoplam=0;
    powCount=0;
}

function deleteInput(){
    var exp=document.form.result.value;
    document.form.result.value = exp.substring(0,exp.length-1);
    focusToInput();
}

function sin(){
    var sin;
    sin=document.getElementById("Value").value;
    document.getElementById("result").innerText=Math.sin(sin);
}

function cos(){
    var cos;
    cos=document.getElementById("Value").value;
    document.getElementById("result").innerText=Math.cos(cos);
}

function tan(){
    var tan;
    tan=document.getElementById("Value").value;
    document.getElementById("result").innerText=Math.tan(tan);
}

function exp(){
    var exp;
    exp=document.getElementById("Value").value;
    document.getElementById("result").innerText=Math.exp(exp);
}





function xpow(){

    var pow = document.getElementById('Value');
    var val = pow.value.split('^');
    document.getElementById("result").innerText = val.reduce((a,c)=> Math.pow(a , Number(c)));
}



function log(){
    var log;
    log=document.getElementById("Value").value;
    parseInt(log)
    document.getElementById("result").innerText=Math.log10(log);
}

function factoriel(){
    var factoriel;
    factoriel=document.getElementById("Value").value;
    var answer = 1;
    if (factoriel == 0 || factoriel == 1){
        return document.getElementById("result").innerText=answer;;
    }else{
    for(var i = factoriel; i >= 1; i--){
      answer = answer * i;
    }
    return document.getElementById("result").innerText=answer;
  }  
}

function changesign(){
    var changeSign;
    changeSign=document.getElementById("Value").value;

    if(changeSign<0){
        changeSign=-1*changeSign;
        document.getElementById("result").innerText=changeSign;
    }
    else if(changeSign>0){
        changeSign=-1*changeSign;
        document.getElementById("result").innerText=changeSign;
    }
}

function validityinput()
   {
      var numbers = /^[-+]?[0-9]+$/;
      var txt;
      txt=document.getElementById("Value").value;
      if(txt.match(numbers))
      {
      alert('It is correct input!');
      focusToInput();
      return true;
      }
      else
      {
      alert('It is wrong input, please input only numbers!');
      document.getElementById("Value").value="";
      focusToInput();
      return false;
      }
   }
