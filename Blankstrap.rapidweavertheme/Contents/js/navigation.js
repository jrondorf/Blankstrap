$(function() {
    $("#blankstrap-nav").css("display", "flex");
    $("#blankstrap-nav #navbarSupportedContent>ul").addClass("navbar-nav").addClass("mr-auto");
    $("#blankstrap-nav .navbar-nav").children(".dropdown").children("a").addClass("dropdown-toggle").attr("href", "#").attr("data-toggle", "dropdown").attr("aria-haspopup", "true").attr("aria-expanded", "false");
    $("#blankstrap-nav .navbar-nav").children(".dropdown").children("ul").addClass("dropdown-menu").attr("aria-labelledby", "navbarDropdownMenuLink");
    $("#blankstrap-nav .navbar-nav").children(".dropdown").children("ul").children("li").children("a").removeClass("nav-link").addClass("dropdown-item");
    $("#blankstrap-nav .navbar-nav").children(".dropdown").children("ul").children("li").children("ul").addClass("blankstrap-hide");
});