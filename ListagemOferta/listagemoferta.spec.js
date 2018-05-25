var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js')
var Helpers = require('../helpers.po.js');
var Listagem = require('../ListagemOferta/listagemoferta.po.js');





fdescribe('ListagemOferta', function () {

    fit('Carregar pagina', function () {
        //"Ligando" o angular
        LoginPO.OnPrepare(false);

        // Realiza login
        LoginPO.Navigate();
        LoginPO.FillEc(LoginPO.usuarioCPontos);
        LoginPO.btAcessar.click();
        browser.wait(Helpers.EC.presenceOf(Senha.campoSenha), 10000);
        Senha.FillSenha(LoginPO.senhaCPontos);
        Senha.btEntrar.click();

        //"Desligando" o angular
        LoginPO.OnPrepare(true);
        browser.sleep(10000);
        Home.btOferta.click();
        browser.wait(Helpers.EC.presenceOf(Listagem.card), 10000);
        expect(Listagem.card.isPresent()).toBe(true);
        
    });



});