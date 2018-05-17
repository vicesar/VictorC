//meucadastro.spec.js

var LoginPO = require('../Login/login.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Senha = require('../Login/senha.po.js');
var MeusPontos = require('../MeusPontos/meuspontos.po.js');
var mySelect = new Helpers.SelectWrapper(by.id('transactionCategory'));





describe('MeusPontos', function () {

    it('Carregar tela de pontos', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);

        
        // Realiza login
        LoginPO.Navigate();
        LoginPO.FillEc(LoginPO.usuarioCPontos);
        LoginPO.btAcessar.click();
        browser.wait(Helpers.EC.visibilityOf(Senha.campoSenha), 10000);
        Senha.FillSenha(LoginPO.senhaCPontos);
        Senha.btEntrar.click();

        // "Desligando" o angular
        LoginPO.OnPrepare(true);


        // Aguarda a presença do ícone do menu lateral e clica
        // browser.sleep(10000);
        // Home.btMenu.click();
        // browser.wait(Helpers.EC.visibilityOf(MeusPontos.linkPontos), 50000);
        // MeusPontos.linkPontos.click();

        browser.sleep(10000);
        Home.saldo.click();
        browser.wait(Helpers.EC.visibilityOf(MeusPontos.pontosGerais), 50000);

        //Espera que apresente classe de Pontos
        expect(MeusPontos.pontosGerais.isPresent()).toBe(true);

        //Realizar "Logout"
        LoginPO.Logout();
    });

    it('Filtro de pontos', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);

        
        // Realiza login
        LoginPO.Navigate();
        LoginPO.FillEc(LoginPO.usuarioCPontos);
        LoginPO.btAcessar.click();
        browser.wait(Helpers.EC.visibilityOf(Senha.campoSenha), 10000);
        Senha.FillSenha(LoginPO.senhaCPontos);
        Senha.btEntrar.click();
        
        
        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        //Aguarda carregar e clica nos pontos
        browser.sleep(10000);
        Home.saldo.click();

        //Aguardar estar visivel a tela de meus pontos e clicar em "Mais Filtro"
        browser.wait(Helpers.EC.visibilityOf(MeusPontos.pontosGerais), 50000);
        MeusPontos.maisFiltro.click();
        browser.sleep(8000);

        MeusPontos.btnFecharFiltro.click();
        //Realizar "Logout"
        LoginPO.Logout();
    });




});