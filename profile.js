'use strict'

window.onload = function() {

    function checkIsPhone(c){
        if(c.length!=12) return false;
        for (i=0;i<3;i++){
           if (!(c.charCodeAt(i)>=48)&&(c.charCodeAt(i)<=57)){
               return false;
           }
        }
        for (i=4;i<7;i++){
           if (!(c.charCodeAt(i)>=48)&&(c.charCodeAt(i)<=57)){
               return false;
           }
        }
        for (i=8;i<11;i++){
           if (!(c.charCodeAt(i)>=48)&&(c.charCodeAt(i)<=57)){
               return false;
           }
        }
        if(c.charAt(3)!="-"||c.charAt(7)!="-") return false;
        return true;
    }

    function checkIsEmail(c){
        if(c.indexOf('@')==-1||c.indexOf('.')==-1) return false;
        return true;
    }

    function checkIsZip(c){
        if(c.length!=5) return false;
        for (i=0;i<5;i++){
           if (!((c.charCodeAt(i)>=48)&&(c.charCodeAt(i)<=57))){
               return false;
           }
        }
        return true;
    }

    function checkIsAccount(c){
        if(c.length<=0) return false;
        for (i=0;i<c.length;i++){
           if (!(c.charCodeAt(i)>=48)&&(c.charCodeAt(i)<=57)&&(c.charCodeAt(i)>=65)&&(c.charCodeAt(i)<=90)&&(c.charCodeAt(i)>=97)&&(c.charCodeAt(i)<=122)){
               return false;
           }
        }
        return true;
    }

    updateBtn = document.getElementById("updateBtn");
    updateBtn.onclick = function(){
        var name = document.getElementById("disname").value;
        var zipcode = document.getElementById("zipcode").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var confirmpassword = document.getElementById("confirmpassword").value;

        if (!checkIsAccount(name)) {
            alert("Your account name should contains only letters and number!");
            return false;
        }

        if((name.charCodeAt(0)>=48)&&(name.charCodeAt(0)<=57)){
            alert("Your account can't start with a number!");
            return false;
        }

        if(!checkIsEmail(email)){
            alert("Email format wrong!");
            return false;
        }

        if (!checkIsPhone(phone)) {
            alert("Phone format wrong!");
            return false;
        }

        if (!checkIsZip(zipcode)) {
            alert("Your zipcode should only contains 5 digit number!");
            return false;
        }

        if(password!=confirmpassword){
            alert("Password should be identical!");
            return false;
        }

        var result = window.confirm('You updated following information\n---\n' + '\n---')
        if(result){

            document.getElementById("disnameField").value = document.getElementById("disname").value;
            document.getElementById("emailField").value = document.getElementById("email").value;
            document.getElementById("phoneField").value = document.getElementById("phone").value;
            document.getElementById("zipcodeField").value = document.getElementById("zipcode").value;
            document.getElementById("passwordField").value = document.getElementById("password").value;


            document.getElementById("disname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("zipcode").value = "";
            document.getElementById("password").value = "";
            document.getElementById("confirmpassword").value = "";
        }
    }
}