var Home = require('../Home/home.po');
var Helpers = require('../helpers.po.js');


(function LoginPO() {
    'use strict';

    //Variáveis
    var acessoLogin = "http://cielofidelidadedev.azurewebsites.net/home/login";
    var usuarioCPontos = '1039170517';
    var senhaCPontos = 'cielo2212';
    var usuarioSPontos = '1212121304';
    var senhaSPontos = 'cielo@10';


    //Elementos
    var campoEC = element(by.id('estabilishmentNumber'));
    var btAcessar = element(by.id('btContinue'));
    var checkRegulamento = $$('.ng-tns-c13-1').get(3);
    var btPreencha = $('.btn.stroke');
    var btPronto = $('.btn.submit.stroke');
    var btVamos = $('.btn.full-green');
    var btFechar = $('.text-link');
    var headerLogin = $('.center.flexbox-rowwrap');


    //Métodos

    //Acessa página da Cielo
    function Navigate() {
        browser.get(acessoLogin);
        browser.wait(Helpers.EC.presenceOf(headerLogin), 10000);
    };

    //Preenche o campo número estabelecimento
    function FillEc(numEC) {
        campoEC.sendKeys(numEC);
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
        usuarioCPontos: usuarioCPontos,
        senhaCPontos: senhaCPontos,
        usuarioSPontos: usuarioSPontos,
        senhaSPontos: senhaSPontos,



        //Elementos
        btAcessar: btAcessar,
        campoEC: campoEC,
        //btMenu: btMenu,
        checkRegulamento: checkRegulamento,
        btPreencha: btPreencha,
        btPronto: btPronto,
        btVamos: btVamos,
        btFechar: btFechar,


        //Métodos
        Navigate: Navigate,
        FillEc: FillEc,
        Logout: Logout,

        OnPrepare: OnPrepare,
    };

})();
