(function HomePO() {
    'use strict';

    //Variáveis


    //Elementos
    var btMenu = $('.icon.header-icon-menu > img');
    var btSair = $$('.hl-nav-secondary li > a').get(4);
    var linkSimulador = $$('.hl-nav-primary li > a').get(5);
    var linkDesconto = $$('.hl-nav-primary li > a').get(7);

    var saldo = $('.balance-point.strong.text-blue');
    //var btSair = $('.hl-nav-secondary.[_ngcontent-c16="Sair"]');


    //Métodos


    module.exports = {
        //Váriaveis

        //Elementos
        btMenu: btMenu,
        btSair: btSair,
        saldo: saldo,
        linkSimulador: linkSimulador,
        linkDesconto: linkDesconto,


        //Métodos

    };

})();
