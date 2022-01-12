$(document).ready(function () {
    $(".hamburger-menu").click(function () {
        $(this).toggleClass("open");
        $(".menu").slideToggle();
    });

    $(".menu li a").click(function () {
        $(".menu li a").removeClass("active");
        $(this).addClass("active");
    });
});
