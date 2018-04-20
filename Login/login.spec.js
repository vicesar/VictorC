// login.spec.js

var LoginPO = require('./login.po.js');
var Helpers = require('../helpers.po.js');


fdescribe('Login', function () {

    it('Acessar a página', function () {
        LoginPO.Navigate();

        //Espera que titulo da página seja 'Programa Cielo Fidelidade'
        expect(browser.getTitle()).toEqual('Programa Cielo Fidelidade');
    });

    it('Realizar login com sucesso', function () {
        LoginPO.Navigate();
        LoginPO.FillEc('1039170517');
        LoginPO.btAcessar.click();

        //Aguarda a presença do campo senha
        browser.wait(Helpers.EC.presenceOf(LoginPO.campoSenha), 10000);
        LoginPO.FillSenha('cielo2212');
        LoginPO.btEntrar.click();

        //Aguarda a presença do ícone do menu lateral
        browser.wait(Helpers.EC.presenceOf(LoginPO.btMenu), 50000);

        //"Desligando" o angular
        LoginPO.OnPrepare(true);

        //Espera que URL seja 'http://cielofidelidadedev.azurewebsites.net/dashboard'
        expect(browser.getCurrentUrl()).toEqual('http://cielofidelidadedev.azurewebsites.net/dashboard');
    });






});