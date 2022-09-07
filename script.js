$(window).scroll(function () {         
    scrl = $(window).scrollTop();
    if (scrl > 50) {
        $('#header').css("height", "72px").css("box-shadow", "0px 3px 5px rgba(0, 0, 0, 0.05)");
    } else if (scrl < 20) {
        $('#header').css("height", "96px").css("box-shadow", "none");
    }
});