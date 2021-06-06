$('#CDetails').click(function () {

    var valid = true;

    var Email = $('#Email').val();
    var Password = $('#Password').val();


    $(".error").remove();


    //Email validation
    if ((Email != undefined) && Email === "") {
        $("#Email").css("outline", "1px solid red");
        $('#Email').after('<span class="error">Please! Enter Email Address.</span>');
        valid = false;
    } else {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!(regex.test(Email))) {

            $("#Email").css("outline", "1px solid red");
            $('#Email').after('<span class="error">Please! Enter Valid Email Address.</span>');

            valid = false;
        } else {
            $("#Email").css("outline", "1px solid #04AA6D");
        }
    }

    //password validation
    if (Password === "") {
        $("#Password").css("outline", "1px solid red");
        $('#Password').after('<span class="error">Please! Enter Password.</span>');
        valid = false;
    } else {
        if (!(Password.length >= 6)) {
            $("#Password").css("outline", "1px solid red");
            $('#Password').after('<span class="error">Please! Enter Password Must Be 6 Characters Long.</span>');
            valid = false;
        } else {
            $("#Password").css("outline", "1px solid 04AA6D");
        }
    }
    return valid;


});