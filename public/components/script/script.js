$(document).ready(function(){

  $(document).scroll(function(){
    var scroll = $("body").scrollTop();
    console.log(scroll);
    if (scroll >= 2800) {
      $("#mongodb-introducao").find(".mongo-header").addClass("header-show");
    }
    else{
      $("#mongodb-introducao").find(".mongo-header").removeClass("header-show");
    }
  })
})
