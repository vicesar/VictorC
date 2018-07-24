(function Lio() {
    'use strict';

    //Variáveis    


    //Elementos
    var btquero = element(by.id('btn-click'));
    //var classemaq = $('.qtd-machines-content');
    var combomaq = element(by.id('quantity'));
    var btconcluir = element(by.id('hire'));
    var classereg = $('.regulation-contract-title');
    var checkli = element(by.css("label[for='relevancia']"));
    var btcontinuar = element(by.id('btnSaveOffer'));
    var btfechar = $('.btn.stroke.modal-success-bt');

    //Métodos


    module.exports = {
        //Váriaveis


        //Elementos
        btquero: btquero,
        //classemaq: classemaq,
        combomaq: combomaq,
        btconcluir: btconcluir,
        classereg: classereg,
        checkli: checkli,
        btcontinuar: btcontinuar,
        btfechar: btfechar,

        //Métodos
       

    };

})();