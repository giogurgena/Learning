//

(function() {
    $('body').addClass('js');              // tu browsers chartuli aqvs javaskriptis funqcia mashin animacia imushavebs. tu ara da chveulebrivad ewereba formi
                                           // amistvis cssshi display none stili unda shevuqmnat 
                                           //    .js #contact {
                                           //     position: absolute;
                                           //     top: 0;
                                           //     width: inherit;
                                           //     display: none;
                                           // }	

    var contactForm = {
        container: $('#contact'),                   //containers mivanichet contactis id shemdegshi advilad rom gamovidzaxot
        config: {
            effect: 'fadeToggle'                    //fadetoggle slidetoggle  efeqtebi advilad rom  shevcvalot da configit gamovidzaxebt shemdegshi
        },

        init: function() {
            $('<button></button>', {
                text: 'Contact Me'
            })                                      //vqmnit contact me buttons
                .insertAfter('article:first')       //buttons vsvamt pirveli articles boloshi
                .on('click', this.show);            //klikis dros vasrulebt show funqcias
        },
        show: function () {
            var cf = contactForm,
                container=cf.container,
                config=cf.config;

            if (container.is (':hidden')) {
                contactForm.close.call(container);
                container[config.effect](500);
            }
        },                                           //gamochenis funqcia

        close: function() {
            var $this = $(this);                     //contact divi shevinaxet

            if ( $this.find('span.close').length ) return;     //tu close class = "close" gilaki ukve arsebobs axals agar daamatebs

            $('<span class=close>X</span>')          //shevqmenit daxurvis gilaki close klasit
                .prependTo(this)                     //davamatet kontaqtis tavshi
                .on('click', function() {            //klikis dros asrulebs funqcias
                    $this[contactForm.config.effect](500);                    
                })

        }
    };
    contactForm.init();                              //funqcias idzaxebs
})();

