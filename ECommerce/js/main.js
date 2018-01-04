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
        var a = parseInt($('sup').text());
        if (isNaN(a)) {
            a = 0;
        };
        $('sup').text(++a);

        var id = $(this).data("id");
        addToCart(id, 'Acer i7 Ram-16gb', './img/computer-1.jpg');
        console.log(cartItems);
    });

    function addToCart(id, title, img) {
        var item = {'id': id, 'title': title, 'imgUrl': img };
        id++;
        cartItems.push(item);
    }


    $('#cartButton').on('click', function(){
        var cartContent = $('#cartContent');
        cartContent.html('');
        for (let i = 0; i < cartItems.length; i++) {
            var div = document.createElement('div');
            var img = document.createElement('img');
            img.setAttribute('src', cartItems[i].imgUrl);
            img.classList.add('imgClassName');
            div.appendChild(img);

            var title = document.createElement('h1');
            title.innerText = cartItems[i].title;
            div.appendChild(title);

            var button = document.createElement('button');
            button.setAttribute('data-id', cartItems[i].id);
            button.innerText = 'Erase';
            div.appendChild(button);

            cartContent.append(div);


            
        }

        

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




