// cssshi overflow scroll gvaqvs imitom rom tu gamortuli aqvs browsers javascripti mainc achvenos scrolit slideshow
// aseve damalulia buttonebi igive mizezis gamo. ar imushaveben


(function(){
    var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),   // shevqmenit sliderUL da shevinaxet slaider klasis childrenebi. da overflow scroll rom gvqonda gavauqmet
        imgs = sliderUL.find('img'),                 // shevqmenit imgs da shevinaxet sliderUL shi mdebare img tagebi
        imgWidth = imgs[0].width,                    // shevinaxet imgs-is pirveli suratis sigane
        imgsLen = imgs.length,                       // shevinaxet imgs ebis raodenoba
        current = 1,                                 // shevinaxet romel imageze vart shecherebuli
        totalImgsWidth = imgsLen * imgWidth;         // shevinaxet yvela images sigane. magalitad tu 4 cali 600 px siganiani surati gvaqvs sruli sigane iqneba 2400px

        $('#slider-nav').show().find('button').on('click', function(){       //buttonebi gamovachinet vipovet titoeuli buttoni da on clickze viyenebt funqcias
            var direction = $(this).data('dir'),                             //shevinaxet data romlitac gavigebt win gadavdivart tu ukan
                loc = imgWidth;

            // if( direction === 'next' ) {             // tu win gadasvlas davachiret 1it win gadava tu ukanas davachiret ertit ukan gadava
            //     current += 1;
            // } else {
            //     current -= 1;
            // }

            // (test) ? true : false;

            // ( direction === 'next' ) ? current += 1 : current -= 1;
            
            ( direction === 'next' ) ? ++current : --current;


            if ( current ===0 ) {
                current = imgsLen;
                loc = totalImgsWidth - imgWidth;
                direction = 'next';
            } else if ( current -1 === imgsLen) {
                current = 1;
                loc = 0;
            }
            
            transition (sliderUL, loc, direction);
        });                       

        function transition (container, loc, direction) {
            var unit;      // -= +=

            if (direction && loc !== 0) {
                unit = (direction === 'next') ? '-=' : '+=';
            }

            container.animate ({
                'margin-left' : unit ? (unit + loc) : loc
            });
        }


})();