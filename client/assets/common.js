$(document).ready(()=>{

  //TOGGLE SIDEBAR
  $('.toggleSideBar').on('click',()=>{
    $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle')
  });

  //TOGGLE SIDE BAR FOLLOW ON SCROLL and WEATHER
  var top = $('.toggleSideBar,#weatherNTime').offset().top - parseFloat($('.toggleSideBar,#weatherNTime').css('marginTop').replace(/auto/, 0));
    $(window).scroll(function (event) {
        var y = $(this).scrollTop();
        //if y > top, it means that if we scroll down any more, parts of our element will be outside the viewport
        //so we move the element down so that it remains in view.
        //   if (y >= top) {
        //      var difference = y - top;
        //      $('.toggleSideBar,#weatherNTime').css("top",difference);
        //  }
   });
});
