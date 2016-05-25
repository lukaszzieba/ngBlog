$(function() {
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 260) {
            $('.navbar-nav a').css('color', 'rgb(222, 222, 222)');
            $('.navbar-default').css('background-color', 'rgba(0, 0, 0, 0.6)');
        } else {
            $('.navbar-nav a').css('color', '#aaaaaa');
            $('.navbar-default').css('background-color', 'rgba(0, 0, 0, 0.4)');
        }
    });
})
