var LoginPO = require('./login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js')
var Helpers = require('../helpers.po.js');



describe('Login', function () {


    it('Acessar a página', function () {
        // Acessa pagina do Cielo Fidelidade
        LoginPO.Navigate();

        // Espera que titulo da página seja 'Programa Cielo Fidelidade'
        expect(browser.getTitle()).toEqual('Programa Cielo Fidelidade');
    });

    it('Realizar login com sucesso', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);

        // Acessa pagina
        LoginPO.Navigate();

        // Bloquea Push
        LoginPO.BloquearPush();

        //Realiza Login
        LoginPO.PreencherEC(LoginPO.usuarioLucas);
        Senha.PreencherSenha(Senha.senhaLucas);

        // Aguarda a presença do ícone do menu lateral
        browser.wait(Helpers.EC.presenceOf(Home.btMenu), 50000);

        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        //Espera que URL seja 'https://cielofidelidadehml.azurewebsites.net/dashboard'
        browser.wait(Helpers.EC.presenceOf(Home.btMenu, 50000));
        expect(browser.getCurrentUrl()).toEqual('http://cielofidelidadehml.azurewebsites.net/dashboard');

        //Realiza logout do site
        LoginPO.Logout();

    });

    it('Realizar primeiro acesso com sucesso', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);

        // Preencher campo EC e prossegue
        LoginPO.Navigate();

        // Bloquea Push
        LoginPO.BloquearPush();

        // Preenche campo de EC e prosseguer
        LoginPO.PreencherEC(LoginPO.usuarioPAcesso);

        // Preenche campo senha e prossegue
        Senha.PreencherSenha(Senha.senhaPAcesso);
        
        // Aguarda a presença do checkbox de Li e Concordo com o Regulamento e clicar no botão
        browser.wait(Helpers.EC.visibilityOf(LoginPO.checkRegulamento), 50000);
        LoginPO.checkRegulamento.click();
        LoginPO.btPreencha.click();

        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        // Aguarda a presença do botão Pronto e clicar no botão
        browser.wait(Helpers.EC.presenceOf(LoginPO.btPronto), 50000);
        LoginPO.btPronto.click();

        //Aguarda a presença do botão Vamos e clicar no botão
        browser.wait(Helpers.EC.elementToBeClickable(LoginPO.btVamos), 50000);
        LoginPO.btVamos.click();

        // Aguarda a presença do botão Fechar e clicar no botão
        browser.wait(Helpers.EC.elementToBeClickable(LoginPO.btFechar), 50000);
        LoginPO.btFechar.click();

        // Aguarda a presença do ícone do menu lateral e espera que URL seja 'https://cielofidelidadehml.azurewebsites.net/dashboard'
        browser.wait(Helpers.EC.presenceOf(Home.btMenu, 50000));
        expect(browser.getCurrentUrl()).toEqual('https://cielofidelidadehml.azurewebsites.net/dashboard');

        // Realiza logout do site
        LoginPO.Logout();
        
    });



});