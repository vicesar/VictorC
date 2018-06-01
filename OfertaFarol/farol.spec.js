var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Listagem = require('../ListagemOferta/listagemoferta.po.js');
var Farol = require('../OfertaFarol/farol.po.js');





fdescribe('Farol', function () {


    fit('Contratar a oferta', function () {
        //"Ligando" o angular
        LoginPO.OnPrepare(false);


        //Realiza login
        LoginPO.Navigate();
        LoginPO.FillEc(LoginPO.usuarioCPontos);
        LoginPO.btAcessar.click();
        browser.wait(Helpers.EC.presenceOf(Senha.campoSenha), 10000);
        Senha.FillSenha(LoginPO.senhaCPontos);
        Senha.btEntrar.click();

        //"Desligando" o angular
        LoginPO.OnPrepare(true);

        //Abre tela de Ofertas
        browser.sleep(10000);
        Home.btOferta.click();

        //Aguarda carregamento do botão para contratar oferta e clica
        browser.wait(Helpers.EC.presenceOf(Listagem.farol), 10000);
        Listagem.farol.click();
        
        //Aguarda carregar classe de video e clica em conheca os planos
        browser.sleep(10000);
        Farol.planos.click();
        
        //Aguarda presenca de botao de contrata agora e clica
        browser.wait(Helpers.EC.elementToBeClickable(Farol.contratar), 10000);
        Farol.contratar.click();

        //Aguarda e clicar no checkbox
        browser.wait(Helpers.EC.elementToBeClickable(Farol.checkLi), 10000);
        Farol.checkLi.click();

        //Aguarda botao Continuar estar habilitado
        browser.wait(Helpers.EC.elementToBeClickable(Farol.btcontinuar), 10000);
        Farol.btcontinuar.click();
        browser.sleep(50000);
    });



});