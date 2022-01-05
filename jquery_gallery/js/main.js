$(document).ready(function () {
    $('.small a').click(function (event) {
    event.preventDefault();
    if( $('.big img').attr('src') !== $(this).attr('href')) {
        $('.big img').hide().attr('src', $(this).attr('href')).fadeIn(2000);
    }


    })
    $('.small a img ').click(function (){
        $('.small a img').fadeTo(500, 1).css({'border' : 'none'});
        $(this).fadeTo(500, 0.5).css({'border' : '1px solid red'});

    })
    $('.button').click(function () {
        $('.gallery').slideToggle(500);
        if($(this).text() === '+'){
            $(this).text('-');
        }else $(this).text('+');
    })
});