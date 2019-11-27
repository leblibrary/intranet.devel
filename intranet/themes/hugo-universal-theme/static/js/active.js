$(document).ready(function() {
    $(".nav li").click(function(){
         $(this).parent().children("li").removeClass("active");
         $(this).toggleClass("active");
    });
});
