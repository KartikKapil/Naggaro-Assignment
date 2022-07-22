$(document).ready(function() {
    $('#usernamevalidation').hide();
    $('#passwordvalidation').hide();
    $('#confirmpasswordvalidation').hide();

    let Error = true;
    let password_error = true;
    let confirm_password_error = true;

    $('#username').keyup(function() {
        username_validation();
    });

    function username_validation(){
        let username = $('#username').val();
        if(username.length < 4 || username.length == 0){
            $('#usernamevalidation').show();
            $('#usernamevalidation').html('Username should be atleast 4 characters');
            $('#usernamevalidation').css('color', 'red');
            Error = false;
            return Error;
        }
        else{
            $('#usernamevalidation').hide();
            Error = true;
            return Error;
        }
    }


    $('#password').keyup(function() {
        password_validation();
    });

    function password_validation(){
        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        let password = $('#password').val();
        if(password.length < 6 || password.length == 0){
            $('#passwordvalidation').show();
            $('#passwordvalidation').html('Password should be atleast 6 characters');
            $('#passwordvalidation').css('color', 'red');
            password_error = false;
            return password_error;
        }
        else{
            $('#passwordvalidation').hide();
            password_error = true;
            return true;
        }
    }

    $('#confirmpassword').keyup(function() {
        confirm_password_validation();
    })

    function confirm_password_validation(){
        let password = $('#password').val();
        let confirm_password = $('#confirmpassword').val();
        if(password != confirm_password){
            $('#confirmpasswordvalidation').show();
            $('#confirmpasswordvalidation').html('Password does not match');
            $('#confirmpasswordvalidation').css('color', 'red');
            confirm_password_error = false;
            return confirm_password_error;
        }
        else{
            $('#confirmpasswordvalidation').hide();
            confirm_password_error = true;
            return true;
        }
    }

    $('#email').keyup(function() {
        email_validation();
    });

    function email_validation(){
        var emailregex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let email = $('#email').val();
        if(email.length == 0){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Email is required');
            $('#emailvalidation').css('color', 'red');
            Error = false;
            return Error;
        }
        else if(!emailregex.test(email)){
            $('#emailvalidation').show();
            $('#emailvalidation').html('Invalid Email');
            $('#emailvalidation').css('color', 'red');
            Error = false;
            return Error;
        }
        else{
            $('#emailvalidation').hide();
            Error = true;
            return Error;
        }
    }

    $('#submitvalidation').click(function() {
        username_validation();
        password_validation();
        confirm_password_validation();

        if(Error == true && password_error == true && confirm_password_error == true){
            return true;
        }
        else{
            return false;
        }
    });

});