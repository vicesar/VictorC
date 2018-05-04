//meucadastro.po.js

//Variaveis
var dataNasc = '02/02/1980'
var numero = '17'

//Elementos
var linkCadastro = element(by.linkText('Meu cadastro'));
var btnDadosP = $$('.my-register-button.flexbox-rowwrap').get(0);
var btnDadosC = $$('.my-register-button.flexbox-rowwrap').get(1);
var campoDataNasc = element(by.id('date'));
var btnSalvar = $('.btn.stroke.gray');
var btnFechar = element(by.id('closeModal'));
var campoNumero = element(by.id('numer0'));


(function MeuCadastro() {
    'use strict';

    function FillDataNasc(dataNasc) {
        campoDataNasc.clear().sendKeys(dataNasc);
    };

    function FillNumero(numero) {
        campoNumero.clear().sendKeys(numero);
    };






    module.exports = {
        //Variaveis
        dataNasc: dataNasc,
        numero: numero,


        //Elementos
        linkCadastro: linkCadastro,
        btnDadosP: btnDadosP,
        campoDataNasc: campoDataNasc,
        btnSalvar: btnSalvar,
        btnFechar: btnFechar,
        btnDadosC: btnDadosC,


        //Metodos
        FillDataNasc: FillDataNasc,
        FillNumero: FillNumero,

    };

    
})();