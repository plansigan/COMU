$(document).ready(() => {
    //TOGGLE SIDE BAR FOLLOW ON SCROLL and WEATHER
    var top = $('.toggleSideBar,#weatherNTime').offset().top() - parseFloat($('.toggleSideBar,#weatherNTime').css('marginTop').replace(/auto/, 0));
    $(window).scroll(function(event) {
        var y = $(this).scrollTop();
    });
});