(function HomePO() {
    'use strict';

    //Variáveis


    //Elementos
    var btMenu = $('.icon.header-icon-menu > img');
    var btSair = $$('.hl-nav-secondary li > a').get(4);
    var linkSimulador = $$('.hl-nav-primary li > a').get(5);
    var linkDesconto = $$('.hl-nav-primary li > a').get(7);
    var saldo = $('.balance-point.strong.text-blue');
    var btOferta = $$('.active').get(4);


    //Métodos


    module.exports = {
        //Váriaveis

        //Elementos
        btMenu: btMenu,
        btSair: btSair,
        saldo: saldo,
        linkSimulador: linkSimulador,
        linkDesconto: linkDesconto,
        btOferta: btOferta,


        //Métodos

    };

})();
