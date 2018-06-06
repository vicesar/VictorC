var Helpers = require('../helpers.po.js');

(function ListagemEC() {
    'use strict';

    //Variáveis    
    var endereco = 'xingu';

    //Elementos
    var campoBusca = $('.input.ng-untouched.ng-pristine.ng-valid');
    var radioEC = element(by.css("label[for='1039170517']"));
    var btEscolher = $('.btn.full-green');

    //Métodos
    function BuscaEndereco(endereco){
        campoBusca.sendKeys(endereco);
        browser.sleep(500);
        Helpers.enter.perform();
        browser.sleep(5000);
        radioEC.click();
        browser.sleep(500);
        btEscolher.click();
    };

    module.exports = {
        //Váriaveis
        endereco: endereco,

        //Elementos
        campoBusca: campoBusca,

        //Métodos
        BuscaEndereco: BuscaEndereco,

    };

})();