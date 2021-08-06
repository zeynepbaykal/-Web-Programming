var number1,number2,r;
    function add(){
        number1=document.form.n1.value;
        num2=document.form.n2.value;   
        
        r=parseInt(number1) + parseInt(number2);

        document.form.result.value=r;
    }
    function subtract(){
        number1=document.form.n1.value;
        number2=document.form.n2.value;   
        
        r=parseInt(number1) - parseInt(number2);

        document.form.result.value=r;    
    }
    function multiply(){
        number1=document.form.n1.value;
        number2=document.form.n2.value;   
        
        r=parseInt(number1) * parseInt(number2);

        document.form.result.value=r;      
    }
    function divide(){
        number1=document.form.n1.value;
        number2=document.form.n2.value;   
        
        if(number2==0){
            alert("Number 2 can not be 0. Please edit that.");
        }
        r=parseInt(number1) / parseInt(number2);

        document.form.result.value=r;  
    }