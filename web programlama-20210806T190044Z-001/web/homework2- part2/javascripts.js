function resetButton(){
    document.getElementById("form").reset();
}

function checkButton(){
    var nameControl = document.forms["form"]["Name"].value;
    if (nameControl == "") {
        alert("Please Enter the Correct Name")
    return false;
    }

    if(document.forms["form"]["Age"].value==""){
        alert("Please Enter the Correct age")
    return false;
    }
    if(document.forms["form"]["Age"].value>40){
        alert("Sorry You Age is Beyound the Limit")
        return false;
    }





    if(document.forms["form"]["Address"].value==""){
        alert("Please Enter the Address")
        return false;
    }

    if(document.forms["form"]["Gender"].value!="Female" && document.forms["form"]["gender"].value!="Male"){
        alert("Please Select the Gender")
        return false;
    }

    var checkItems = document.forms["form"]['Lang[]'];
    var total=0;
    for(var i=0;i<checkItems.length;i++){
        checkItems[i].checked?total++:null;            
    }
    if(total<1){
        alert("Please Select the Languages Known")
    }

    if(document.forms["form"]["pass"].value==""){
        alert("Please Enter the Password")
    return false;
    }

    confirm("You Have Entered the Data Correctly, Thank you")
    
}