import $ from 'jquery';
$(function () {
    let $footer = $('.footer');
    let $footerWithWidgets = $('.footer_withWidgets');
    $(window).resize(toggleFooter);
    $(window).trigger("resize");
    function toggleFooter() {
        let $width = $(window).width();
        if ($width < 768) {
            $footer.css('display', 'block');
            $footerWithWidgets.css('display', 'none');
        } else {
            $footer.css('display', 'none');
            $footerWithWidgets.css('display', 'block');
        }
    }
});