var Home = require('../Home/home.po');
var Helpers = require('../helpers.po.js');


(function LoginPO() {
    'use strict';

    //Variáveis
    var acessoLogin = "http://cielofidelidadehml.azurewebsites.net/home/login";
    var usuarioLucas = '1039170517';
    var usuarioSPontos = '9999999176';
    var usuarioPAcesso = '1212121304';


    //Elementos
    var campoEC = element(by.id('estabilishmentNumber'));
    var btAcessar = element(by.id('btContinue'));
    var checkRegulamento = element(by.css("label[for='regulamento']"));
    var btPreencha = $('.btn.stroke');
    var btPronto = $('.btn.submit.stroke');
    var btVamos = $('.btn.full-green');
    var btFechar = $('.text-link');
    var headerLogin = $('.center.flexbox-rowwrap');
    var btNao = element(by.id('onesignal-popover-cancel-button'));
    //var btNao = $('.align-right.secondary.popover-button');
    //var btNao = $$('.align-right.secondary.popover-button').get(0);


    //Métodos

    //Acessa página da Cielo
    function Navigate() {
        browser.get(acessoLogin);
        browser.wait(Helpers.EC.presenceOf(headerLogin), 10000);
    };

    //Acessa página da Cielo
    function BloquearPush() {
    btNao.isPresent().then(function(result) {
        if ( result === true ) {
            //browser.wait(Helpers.EC.elementToBeClickable(btNao), 50000);
            browser.sleep(7000);
            btNao.click();
        }
    });
    };

    //Preenche o campo número estabelecimento
    function PreencherEC(numEC) {
        browser.wait(Helpers.EC.invisibilityOf(btNao), 10000);
        browser.wait(Helpers.EC.presenceOf(campoEC), 10000);
        campoEC.sendKeys(numEC);
        browser.wait(Helpers.EC.elementToBeClickable(btAcessar));
        btAcessar.click();
    };

    //Preenche o campo número estabelecimento
    function Logout() {
        browser.sleep(3000);
        Home.btMenu.click();
        browser.sleep(3000);
        Home.btSair.click();
        browser.sleep(3000);
    };
    

    function OnPrepare(status) {
        browser.ignoreSynchronization = status;
    };


    module.exports = {
        //Váriaveis
        usuarioLucas: usuarioLucas,
        usuarioSPontos: usuarioSPontos,
        usuarioPAcesso: usuarioPAcesso,



        //Elementos
        btAcessar: btAcessar,
        campoEC: campoEC,
        checkRegulamento: checkRegulamento,
        btPreencha: btPreencha,
        btPronto: btPronto,
        btVamos: btVamos,
        btFechar: btFechar,


        //Métodos
        Navigate: Navigate,
        BloquearPush: BloquearPush,
        PreencherEC: PreencherEC,
        Logout: Logout,

        OnPrepare: OnPrepare,
    };

})();
