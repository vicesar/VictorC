//meuspontos.po.js

(function MeusPontos() {
    'use strict';
    //Variáveis




    //Elementos
    var linkPontos = $$('.hl-nav-primary li > a').get(4);
    var pontosGerais = $('.my-points-content-total');
    var maisFiltro = element(by.linkText('Mais filtros'));
    var btnFecharFiltro = $$('.md-close').get(1);
    var periodo = $$('.input.input-date.ng-pristine.ng-invalid.ng-untouched').get(0);

   



    //Métodos




    module.exports = {
        //Váriaveis


        //Elementos
        linkPontos: linkPontos,
        pontosGerais: pontosGerais,
        maisFiltro: maisFiltro,
        btnFecharFiltro: btnFecharFiltro,
        
        //Métodos
    };

})();