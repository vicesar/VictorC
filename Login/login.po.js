//login.po.js

(function LoginPO() {
    'use strict';
    //Variáveis
    var acessoLogin = "http://cielofidelidadedev.azurewebsites.net/home/login";
    var numEC = '1039170517';
    var senha = 'cielo2212';

    //Protractor

    //Elementos da Page
    var campoEC = element(by.id('estabilishmentNumber'));
    var btAcessar = element(by.id('btContinue'));
    var campoSenha = element(by.id('password'));
    var btEntrar = element(by.id('btAction'));
    var btMenu = $('.icon.header-icon-menu');

    //Métodos da Page

    //Acessa página da Cielo
    function Navigate() {
        browser.get(acessoLogin);
    };

    //Preenche o campo número estabelecimento
    function FillEc() {
        campoEC.sendKeys(numEC);
    };

    //Preenche o campo senah
    function FillSenha() {
        campoSenha.sendKeys(senha);
    };

    function OnPrepare(status) {
        browser.ignoreSynchronization = status;
    }


    module.exports = {
        //Elementos
        btAcessar: btAcessar,
        campoSenha: campoSenha,
        btEntrar: btEntrar,
        btMenu: btMenu,


        //Métodos
        Navigate: Navigate,
        FillEc: FillEc,
        FillSenha: FillSenha,
        OnPrepare: OnPrepare,
    };

})();
