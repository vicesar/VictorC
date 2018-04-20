// login.spec.js

var LoginPO = require('./login.po.js');
var Helpers = require('../helpers.po.js');


describe('Login', function () {

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

    xit('Realizar primeiro com sucesso', function () {
        LoginPO.Navigate();
        LoginPO.FillEc('1212121304');
        LoginPO.btAcessar.click();

        //Aguarda a presença do campo senha
        browser.wait(Helpers.EC.presenceOf(LoginPO.campoSenha), 10000);
        LoginPO.FillSenha('cielo@10');
        LoginPO.btEntrar.click();

        //Aguarda a presença do checkbox de Li e Concordo com o Regulamento e clicar no botão
        browser.wait(Helpers.EC.presenceOf(LoginPO.checkRegulamento), 50000);
        LoginPO.checkRegulamento.click();
        LoginPO.btPreencha.click();

        //Aguarda a presença do botão Vamos e clicar no botão
        browser.wait(Helpers.EC.presenceOf(LoginPO.btPronto), 50000);
        LoginPO.btPronto.click();

        //Deve aguardar 

        //browser.wait(Helpers.EC.visibilityOf(LoginPO.btVamos), 50000);
        //browser.sleep(5000);
        //LoginPO.btVamos.click();
        //browser.sleep(50000);


    });






});