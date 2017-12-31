(function() {
    $('.box').bind('click', function() {
        console.log('clicked');
        $(this).clone(true).appendTo('body');
    });
})();

