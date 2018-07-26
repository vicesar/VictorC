var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Listagem = require('../ListagemOferta/listagemoferta.po.js');
var Farol = require('../OfertaFarol/farol.po.js');



describe('Farol', function () {

    it('Contratar a oferta', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);

        // Acessa pagina
        LoginPO.Navigate();

        // Bloquea Push
        LoginPO.BloquearPush();

        // Realiza login
        LoginPO.PreencherEC(LoginPO.usuarioSPontos);
        Senha.PreencherSenha(Senha.senhaSPontos);

        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        // Abre tela de Ofertas
        browser.sleep(12000);
        Home.btOferta.click();

        // Aguarda carregamento do botão para contratar oferta e clica
        browser.wait(Helpers.EC.elementToBeClickable(Listagem.farol), 10000);
        Listagem.farol.click();
        
        // Aguarda carregar classe de video e clica em conheca os planos
        browser.wait(Helpers.EC.visibilityOf(Farol.btplanos));
        Farol.btplanos.click();

        // Aguarda e clicar no checkbox
        browser.wait(Helpers.EC.elementToBeClickable(Farol.checkLi), 10000);
        Farol.checkLi.click();

        // Aguarda botao Continuar estar habilitado
        browser.wait(Helpers.EC.elementToBeClickable(Farol.btcontratar), 10000);
        Farol.btcontratar.click();
       
        // Espera carregar botao fechar de modal de sucesso
        browser.wait(Helpers.EC.visibilityOf(Farol.btfechar), 10000);
        expect(Farol.btfechar.isPresent()).toBe(true);

        // Clicar no botao Fechar do modal
        Farol.btfechar.click();

        // Realiza logout do site
        LoginPO.Logout();
        
    });



});