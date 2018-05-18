// Variaveis
var valor1 = '2.000,00';
var valor2 = '1.000,00';



// Elementos
var divSimuladorPontos = $('.container-background-md');
var campoValor= $$('.input.ng-untouched.ng-pristine.ng-invalid').get(0);
var btCalcular = element(by.id('btCalc'));
var btCatalogo = $('.btn.list-product-btn.stroke');



(function SimuladorPontos() {
    'use strict';

    function FillValores(valor1, valor2) {
        campoValor.sendKeys(valor1);
        browser.sleep(500);
        campoValor.sendKeys(valor2);
    };




    module.exports = {
        //Váriaveis
        valor1: valor1,
        valor2: valor2,

        //Elementos
        divSimuladorPontos: divSimuladorPontos,
        btCalcular: btCalcular,
        btCatalogo: btCatalogo,


        //Métodos
        FillValores: FillValores,

    };

})();