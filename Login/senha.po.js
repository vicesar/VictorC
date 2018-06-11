var Helpers = require('../helpers.po.js');



(function SenhaPO() {
    'use strict';

    //Variáveis

    
    //Elementos
    var campoSenha = element(by.id('password'));
    var btEntrar = element(by.id('btAction'));
    var senhaLucas = 'cielo2212';
    var senhaSPontos = 'LTM@2018';
    var senhaPAcesso = 'cielo@10';


    //Métodos

    //Preenche o campo senha
    function PreencherSenha(senha) {
        browser.wait(Helpers.EC.presenceOf(campoSenha), 10000);
        campoSenha.sendKeys(senha);
        btEntrar.click();
    };


    module.exports = {
        //Váriaveis
        senhaLucas: senhaLucas,
        senhaSPontos: senhaSPontos,
        senhaPAcesso: senhaPAcesso,
        

        //Elementos
        campoSenha: campoSenha,
        btEntrar: btEntrar,
        

        //Métodos
        PreencherSenha: PreencherSenha,
    };

})();