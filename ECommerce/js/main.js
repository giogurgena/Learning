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

var cartItems = [];

(function () {
    $('.add-to-cart').on('click', function () {
        
        

        var id = $(this).data("id");
        var parent = $(this).closest('.block');
        var img = parent.find('.block-img').attr('src');
        var title = parent.find('.headline').text();

        addToCart(id, title, img);
        $('sup').text(cartItems.length);
    });

    function addToCart(id, title, img) {
        var isNew = true;
        $.each(cartItems, function (index, obj) {
            if (obj.id === id) {
                obj.quantity +=1;
                isNew = false;
            }
        });
        if (isNew) {
            var item = { 'id': id, 'title': title, 'imgUrl': img, 'quantity': 1 };
            cartItems.push(item);
        }
    }


    $('#cartButton').on('click', function () {
        var cartContent = $('#cartContent');
        cartContent.html('');
        var temp = $('#modalTemplate').html();

        $.each(cartItems, function (index, obj) {
            var cart = temp
                .replace(/{{image}}/ig, obj.imgUrl)
                .replace(/{{title}}/ig, obj.title)
                .replace(/{{id}}/ig, obj.id)
                .replace(/{{quantity}}/ig, obj.quantity);

            cartContent.append(cart);
        });

        $('.remove-item').on('click', function(){
            $(this).parent().parent().remove();
        });



        $('#cartModal').modal('show');
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




