(function Farol() {
    'use strict';

    //Variáveis    


    //Elementos
    var video = $('.play-video');
    // var planos = $$('.btn.full-green').get(0);
    var planos = element(by.id('btnRedirectStore'));
    var contratar = element(by.id('saveContract00'));
    var checkLi = element(by.css("label[for='relevancia']"));
    var btcontinuar = element(by.id('btnSaveOffer'));
    var btfechar = element(by.id('closeModal'));


    //Métodos


    module.exports = {
        //Váriaveis


        //Elementos
        video: video,
        planos: planos,
        contratar: contratar,
        checkLi: checkLi,
        btcontinuar: btcontinuar,
        btfechar: btfechar,

        //Métodos
       

    };

})();