$(document).ready(function(){
    var check = true;
    $('.clicks').on('click',function(){
        if(check==true){
            check = false;
            $('#box').addClass('show');
        }
        else{
            check = true;
            $('#box').removeClass('show');
        }
    })

    $('.submission').on('click',function(){
        $('#box').removeClass('show');
    });
});