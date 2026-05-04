$(function () {
    $('.faq-dl > div dd').hide();

    $('.faq-dl > div').on('click', function () {
        const $item = $(this);
        const $dd = $item.children('dd');
        const $span = $item.find('.pa-plus');

        $item.toggleClass('active');
        $span.toggleClass('active');

        if ($item.hasClass('active')) {
            $dd.stop(true, true).slideDown(100).addClass('active');
        } else {
            $dd.stop(true, true).slideUp(100).removeClass('active');
        }
    });
});
