(function ListagemOferta() {
    'use strict';

    //Variáveis



    //Elementos
    var card = $$('.card-business.offer').get(0);
    var recarga = element(by.css('a[href*="/dashboard/ofertas/1021/recarga-de-telefones"]'));
    var farol = element(by.css('a[href*="/dashboard/ofertas/1018/cielo-farol"]'));


    //Métodos

    

    module.exports = {
        //Váriaveis


        //Elementos
        card: card,
        recarga: recarga,
        farol: farol,

        //Métodos
     
    };

})();