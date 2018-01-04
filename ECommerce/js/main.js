$(document).ready(function () {
    $('#myInput').on('keyup', function () {
        var value = $(this).val().toLowerCase();
        $('.dropdown-menu li').filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });

    $('#inputPhone').mask('000-000-000');
});

// (function(){
//     var a=1;
//     var $sup=$('sup');
//     $sup.hide();
//     $('.add-to-cart').on('click', function(){

//     $sup.show();

//     $sup.text(a++);
//     });
// })();


// (function(){
//     var a=1;
//     var $sup=$('sup');

//     $('.add-to-cart').on('click', function(){

//     $sup.text(a++);
//     });
// })();


(function () {
    $('.add-to-cart').on('click', function () {
        var a = parseInt($('sup').text());
        if (isNaN(a)) {
            a = 0;
        };
        $('sup').text(++a);
    });
})();

// (function(){
//     $('.add-to-cart').on('click', function(){
//         var $sup=$('sup');
//         var a = parseInt($sup.text());
//         $sup.text(a++);
//         console.log(a);
//     });
// })();