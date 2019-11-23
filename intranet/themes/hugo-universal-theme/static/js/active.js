$(document).ready(function() {
    $("nav-item li").on("click", function() {
        $("nav-item li").removeClass("active");
        $(this).addClass("active");
    });
});
