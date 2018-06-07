var LoginPO = require('./login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js')
var Helpers = require('../helpers.po.js');





describe('Login', function () {


    it('Acessar a página', function () {
        LoginPO.Navigate();

        //Espera que titulo da página seja 'Programa Cielo Fidelidade'
        expect(browser.getTitle()).toEqual('Programa Cielo Fidelidade');
    });

    it('Realizar login com sucesso', function () {
        // Realiza login
        LoginPO.Navigate();
        LoginPO.FillEc(LoginPO.usuarioSPontos);
        LoginPO.btAcessar.click();
        browser.wait(Helpers.EC.presenceOf(Senha.campoSenha), 10000);
        Senha.FillSenha(Senha.senhaSPontos);
        Senha.btEntrar.click();

        //Aguarda a presença do ícone do menu lateral
        browser.wait(Helpers.EC.presenceOf(Home.btMenu), 50000);

        //"Desligando" o angular
        LoginPO.OnPrepare(true);

        //Espera que URL seja 'http://cielofidelidadedev.azurewebsites.net/dashboard'
        expect(browser.getCurrentUrl()).toEqual('http://cielofidelidadedev.azurewebsites.net/dashboard');


        //Realiza logout do site
        LoginPO.Logout();


    });

    it('Realizar primeiro acesso com sucesso', function () {
        //"Ligando" o angular
        LoginPO.OnPrepare(false);

        LoginPO.Navigate();
        browser.wait(Helpers.EC.presenceOf(LoginPO.campoEC), 10000);
        LoginPO.FillEc(LoginPO.usuarioPAcesso);
        LoginPO.btAcessar.click();


        //Aguarda a presença do campo senha
        browser.wait(Helpers.EC.presenceOf(Senha.campoSenha), 100000);
        Senha.FillSenha(Senha.senhaPAcesso);
        Senha.btEntrar.click();

        
        //Aguarda a presença do checkbox de Li e Concordo com o Regulamento e clicar no botão
        browser.wait(Helpers.EC.visibilityOf(LoginPO.checkRegulamento), 50000);
        LoginPO.checkRegulamento.click();
        LoginPO.btPreencha.click();

        //"Desligando" o angular
        LoginPO.OnPrepare(true);

        //Aguarda a presença do botão Pronto e clicar no botão
        browser.wait(Helpers.EC.presenceOf(LoginPO.btPronto), 50000);
        LoginPO.btPronto.click();

        //Aguarda a presença do botão Vamos e clicar no botão
        browser.wait(Helpers.EC.presenceOf(LoginPO.btVamos), 50000);
        LoginPO.btVamos.click();

        //Aguarda a presença do botão Fechar e clicar no botão
        browser.wait(Helpers.EC.presenceOf(LoginPO.btFechar), 50000);
        LoginPO.btFechar.click();

        //Aguarda a presença do ícone do menu lateral e espera que URL seja 'http://cielofidelidadedev.azurewebsites.net/dashboard'
        browser.wait(Helpers.EC.urlIs('http://cielofidelidadedev.azurewebsites.net/dashboard'), 50000);
        expect(browser.getCurrentUrl()).toEqual('http://cielofidelidadedev.azurewebsites.net/dashboard');

        //Realiza logout do site
        LoginPO.Logout();
    });



});