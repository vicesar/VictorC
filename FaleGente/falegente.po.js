(function FaleGente() {
    'use strict';

    //Variáveis

    //Elementos
    var faleComGente = $$('.text-link').get(2);
    var campoNome = $$('.input.ng-untouched.ng-pristine').get(0);
    var campoEmail = $$('.input.ng-untouched.ng-pristine').get(0);
    var campoCPF = $$('.input.ng-untouched.ng-pristine').get(0);
    var campoCelular = $$('.input.ng-untouched.ng-pristine').get(0);
    var campoMensagem = element(by.id('mensagem'));
    var btEnviar = element(by.id('btnSendContact'));
    var modalSucesso = $$('.md-container.ng-tns-c4-1');


    //Métodos

    function FillCampos(nome,email,cpf,celular,mensagem){
        campoNome.sendKeys(nome);
        browser.sleep(500);
        campoEmail.sendKeys(email);
        browser.sleep(500);
        campoCPF.sendKeys(cpf);
        browser.sleep(500);
        campoCelular.sendKeys(celular);
        browser.sleep(500);
        campoMensagem.sendKeys(mensagem);
        browser.sleep(500);

    };

    module.exports = {
        //Váriaveis

        //Elementos
        faleComGente: faleComGente,
        campoMensagem: campoMensagem,
        btEnviar: btEnviar,
        modalSucesso: modalSucesso,
        

        //Métodos
        FillCampos: FillCampos,
    };


    
})();