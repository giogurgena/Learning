(function() {
    $('.box').bind('click', function() {             //igebs box klasis elements da daklikvis shemtxvevashi asrulebs funqcias
        console.log('clicked');
        $(this).clone(true).appendTo('body');        
    });
})();

