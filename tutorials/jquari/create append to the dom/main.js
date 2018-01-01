// (function() {
//     $('article').append('Hello from the JavaScript');
// })();   //articles boloshi amatebs


// (function() {
//     $('article').prepend('Hello from the JavaScript');
// })();   //articles tavshi amatebs


// (function() {
//     $('h1').after('Hello from the JavaScript');
// })();   //h1 is shemdeg amatebs


// (function() {
//     $('p').first().before('Hello from the JavaScript');
// })();   //pirveli p tagis win amatebs


// (function() {
//     $('<h2></h2>', {
//         text: 'Hello from the JavaScript',
//         class:'myClass'
//     }).appendTo('article');
// })();   //qmnis h2 tags teqstit da klasit articles boloshi


// (function() {
//     $('<h2></h2>', {
//         text: 'Hello from the JavaScript',
//         class:'myClass'
//     }).prependTo('article');
// })();   //qmnis h2 tags teqstit da klasit articles tavshi


// (function() {
//     $('<h2></h2>', {
//         text: 'Hello from the JavaScript',
//         class:'myClass'
//     }).insertAfter('h1');
// })();   //qmnis h2 tags teqstit da klasit h1 tagis shemdeg


// (function() {
//     $('<h2></h2>', {
//         text: 'Hello from the JavaScript',
//         class:'myClass'
//     }).insertBefore('p:nth-child(3)');
// })();   //qmnis h2 tags teqstit da klasit articleshi mesame elementis (meore p tagis)win


// (function() {
//     $('h1').appendTo('article');
// })();   //igebs h1 tags da gadaaqvs articles boloshi (rodesac im tags igeb rac arsebobs move-s uketebs)


// (function() {
//     $('p').eq(0).after( $('h1'));
// })();   //igebs pirvel p tags da h1-s svams magis shemdeg


// (function() {
//     $('p').eq(0).after(function () {
//         return $(this).prev();
//     });
// })();   //igebs pirvel p tags da funqciis sashualebit amatebs pirvel elements


// (function() {
//     var co =  $('span.co').each(function() {
//         var $this = $(this);                         //jquery object mivanichet
//         $('<blockquote></blockquote>', {             // shevqmenit blockquote elementi
//             class: 'co',                             //davamatet klasi
//             text: $this.text()                       //davamatet span tagis teqsti
//         }).prependTo ( $this.closest('p') );         //davamatet spantan yvelaze axlos mdebare p tagis win
//     });
// })(); 


(function() {
    var co =  $('article').find('span.co').each(function() {      // pirvel rigshi vigebt article tags da magashi vedzebt spans
        var $this = $(this);                         //jquery object mivanichet
        $('<blockquote></blockquote>', {             // shevqmenit blockquote elementi
            class: 'co',                             //davamatet klasi
            text: $this.text()                       //davamatet span tagis teqsti
        }).prependTo ( $this.closest('p') );         //davamatet spantan yvelaze axlos mdebare p tagis win
    });
})(); 