$(document).ready(()=>{

  //TOGGLE SIDEBAR
  $('.toggleSideBar').on('click',()=>{
    $('.ui.sidebar')
      .sidebar('setting', 'transition', 'overlay')
      .sidebar('toggle')
  });

  //STICKY WEATHER UPDATE
  $('.ui.sticky')
    .sticky({
      context: '#weatherNTime'
    })
  ;

});
