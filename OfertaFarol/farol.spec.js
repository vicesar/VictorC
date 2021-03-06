var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Listagem = require('../ListagemOferta/listagemoferta.po.js');
var Farol = require('../OfertaFarol/farol.po.js');





describe('Farol', function () {


    it('Contratar a oferta', function () {
        //"Ligando" o angular
        LoginPO.OnPrepare(false);


        //Realiza login
        LoginPO.Navigate();
        LoginPO.FillEc(LoginPO.usuarioLucas);
        LoginPO.btAcessar.click();
        browser.wait(Helpers.EC.presenceOf(Senha.campoSenha), 10000);
        Senha.FillSenha(Senha.senhaLucas);
        Senha.btEntrar.click();

        //"Desligando" o angular
        LoginPO.OnPrepare(true);

        //Abre tela de Ofertas
        browser.sleep(12000);
        Home.btOferta.click();

        //Aguarda carregamento do botão para contratar oferta e clica
        browser.wait(Helpers.EC.visibilityOf(Listagem.farol), 10000);
        Listagem.farol.click();
        
        //Aguarda carregar classe de video e clica em conheca os planos
        browser.sleep(10000);
        Farol.btplanos.click();
        
        //Aguarda presenca de botao de contrata agora e clica
        browser.wait(Helpers.EC.elementToBeClickable(Farol.btcontratar), 10000);
        Farol.btcontratar.click();

        //Aguarda e clicar no checkbox
        browser.wait(Helpers.EC.elementToBeClickable(Farol.checkLi), 10000);
        Farol.checkLi.click();

        //Aguarda botao Continuar estar habilitado
        browser.wait(Helpers.EC.elementToBeClickable(Farol.btcontinuar), 10000);
        Farol.btcontinuar.click();
       
        //Espera carregar botao fechar de modal de sucesso
        browser.wait(Helpers.EC.visibilityOf(Farol.btfechar), 10000);
        expect(Farol.btfechar.isPresent()).toBe(true);

        //Clicar no botao Fechar do modal
        Farol.btfechar.click();

        //Realiza logout do site
        LoginPO.Logout();
        
    });



});