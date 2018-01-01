(function(){
    $('dd').filter(':nth-child(n+4)').addClass('hide');  //dl tagshi myof meotxe dd tagidan yvelas adzlevs klass "hide {display:none}"
    $('dl').on('mouseenter','dt', function() {           //dt tagze mausis hoveris dros asrulebs funqcias
        $(this)                                          
            .next()                                      //igebs dt tagis shemdeg element
            .slideDown(200)                              //chamowevs 200miliwamshi
            .siblings('dd')                              //rodesac sxva dt tagze gadawev mauss
                .slideUp(200);                           //awevs 200miliwamshi
    });
})();


