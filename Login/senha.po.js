//login.po.js

(function SenhaPO() {
    'use strict';

    //Variáveis

    //Elementos
    var campoSenha = element(by.id('password'));
    var btEntrar = element(by.id('btAction'));


    
    //Métodos

    //Preenche o campo senha
    function FillSenha(senha) {
        campoSenha.sendKeys(senha);
    };


    module.exports = {
        //Váriaveis


        //Elementos
        campoSenha: campoSenha,
        btEntrar: btEntrar,
        


        //Métodos
        FillSenha: FillSenha,
    };

})();