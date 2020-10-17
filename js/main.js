$(function() {
    // calculate body padding top depend on navpar height
    $("body").css("paddingTop", $("nav").innerHeight());

    // nav slide
    $("nav i").click(function() {
        $("nav ul").slideToggle();
    })

    // navbar function
    $("nav li a").click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $("#" + $(this).data("scroll")).offset().top - 80
        }, 1000);
    });

    // add activ class on navbar link
    $("nav ul li a").click(function() {
        $(this).addClass("active").parent().siblings().find("a").removeClass("active");
    });

})