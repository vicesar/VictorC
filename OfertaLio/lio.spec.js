var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Listagem = require('../ListagemOferta/listagemoferta.po.js');
var Lio = require('../OfertaLio/lio.po.js');
var ListagemEC = require ('../ListagemEC/listagemec.po.js');
var mySelect = new Helpers.SelectWrapper(by.id('quantity'));



describe('Lio', function () {

    it('Contratar a oferta', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);

        // Acessa pagina
        LoginPO.Navigate();

        // Bloquea Push
        LoginPO.BloquearPush();

        // Realizar login
        LoginPO.PreencherEC(LoginPO.usuarioSPontos);
        Senha.PreencherSenha(Senha.senhaSPontos);

        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        // Abre tela de Ofertas
        browser.sleep(12000);
        Home.btOferta.click();

        // Aguarda carregamento do botão para contratar oferta e clica
        browser.wait(Helpers.EC.presenceOf(Listagem.lio), 50000);
        Listagem.lio.click();
        
        // Aguarda carregar pagina e clica para contratar oferta
        browser.sleep(12000);
        Lio.btquero.click();

        // Aguarda carregar carregar pagina e seleciona radio button do EC principal e clica no botao Escolher
        ListagemEC.EscolhaEC();

        // Aguarda carregar a classe de selecionar quantidade de maquina e seleciona quantidade
        browser.wait(Helpers.EC.visibilityOf(Lio.combomaq), 50000);
        mySelect.selectByValue('1');

        // Aguarda checkbox de Li e concordo e flegar
        browser.wait(Helpers.EC.elementToBeClickable(Lio.checkli), 10000);
        Lio.checkli.click();

        // Aguarda botão Concluir estar habilitado para clicar
        browser.wait(Helpers.EC.elementToBeClickable(Lio.btconcluir), 10000);
        Lio.btconcluir.click();

        // Aguarda botão fechar do modal de sucesso
        browser.wait(Helpers.EC.visibilityOf(Lio.btfechar), 10000);
        expect(Lio.btfechar.isPresent()).toBe(true);

        // Clica para fechar o modal
        Lio.btfechar.click();
        
        // Realiza logout do site
        LoginPO.Logout();
        
    });



});