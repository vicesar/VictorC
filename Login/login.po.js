//login.po.js

(function LoginPO() {
    'use strict';

    //Variáveis
    var acessoLogin = "http://cielofidelidadedev.azurewebsites.net/home/login";


    //Elementos
    var campoEC = element(by.id('estabilishmentNumber'));
    var btAcessar = element(by.id('btContinue'));
    var campoSenha = element(by.id('password'));
    var btEntrar = element(by.id('btAction'));
    var btMenu = $('.icon.header-icon-menu');
    var checkRegulamento = $$('.ng-tns-c13-1').get(3);
    var btPreencha = $('.btn.stroke');
    var btPronto = $('.btn.submit.stroke');
    var btVamos = $('.btn.full-green');

    
    //Métodos

    //Acessa página da Cielo
    function Navigate() {
        browser.get(acessoLogin);
    };

    //Preenche o campo número estabelecimento
    function FillEc(numEC) {
        campoEC.sendKeys(numEC);
    };

    //Preenche o campo senah
    function FillSenha(senha) {
        campoSenha.sendKeys(senha);
    };

    function OnPrepare(status) {
        browser.ignoreSynchronization = status;
    };


    module.exports = {
        //Váriaveis


        //Elementos
        btAcessar: btAcessar,
        campoSenha: campoSenha,
        btEntrar: btEntrar,
        btMenu: btMenu,
        checkRegulamento: checkRegulamento,
        btPreencha: btPreencha,
        btPronto: btPronto,
        btVamos: btVamos,


        //Métodos
        Navigate: Navigate,
        FillEc: FillEc,
        FillSenha: FillSenha,
        OnPrepare: OnPrepare,
    };

})();
