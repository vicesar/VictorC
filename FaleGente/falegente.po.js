//falegente.po.js

(function FaleGente() {
    'use strict';

    //Variáveis

    //Elementos
    var falecomgente = $$('.text-link').get(2);
    var campoNome = $$('.input.ng-untouched.ng-pristine').get(0);
    var campoEmail = $$('.input.ng-untouched.ng-pristine').get(0);
    var campoCPF = $$('.input.ng-untouched.ng-pristine').get(0);
    var campoCelular = $$('.input.ng-untouched.ng-pristine').get(0);
    //var comboAssunto = element(by.id('idAssunto'));

    //Métodos

    function FillCampos(nome,email,cpf,celular){
        campoNome.sendKeys(nome);
        browser.sleep(500);
        campoEmail.sendKeys(email);
        browser.sleep(500);
        campoCPF.sendKeys(cpf);
        browser.sleep(500);
        campoCelular.sendKeys(celular);
        browser.sleep(500);
    };

    module.exports = {
        //Váriaveis


        //Elementos
        falecomgente: falecomgente,
        campoNome: campoNome,
        campoEmail: campoEmail,
        campoCPF: campoCPF,

        //Métodos
        FillCampos: FillCampos,
    };


    
})();