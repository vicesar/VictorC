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
        //"Ligando" o angular
        LoginPO.OnPrepare(false);

        //Realiza login
        LoginPO.Navigate();
        LoginPO.FillEc(LoginPO.usuarioSPontos);
        LoginPO.btAcessar.click();
        browser.wait(Helpers.EC.presenceOf(Senha.campoSenha), 10000);
        Senha.FillSenha(Senha.senhaSPontos);
        Senha.btEntrar.click();

        //"Desligando" o angular
        LoginPO.OnPrepare(true);

        //Abre tela de Ofertas
        browser.sleep(10000);
        Home.btOferta.click();

        //Aguarda carregamento do botão para contratar oferta e clica
        browser.wait(Helpers.EC.presenceOf(Listagem.lio), 10000);
        Listagem.lio.click();
        
        //Aguarda carregar pagina e clica para contratar oferta
        browser.sleep(10000);
        Lio.btquero.click();
        browser.wait(Helpers.EC.visibilityOf(ListagemEC.radioEC), 80000);
        ListagemEC.radioEC.click();
        browser.sleep(500);
        ListagemEC.btEscolher.click();

        //Aguarda carregar a classe de selecionar quantidade de maquina e seleciona quantidade
        browser.wait(Helpers.EC.visibilityOf(Lio.classemaq), 10000);
        mySelect.selectByValue('1');

        //Aguarda botão Concluir estar habilitado para clicar
        browser.wait(Helpers.EC.elementToBeClickable(Lio.btconcluir), 10000);
        Lio.btconcluir.click();
        
        //Aguarda carregar classe de tela de regulamento
        browser.wait(Helpers.EC.elementToBeClickable(Lio.checkli), 10000);
        Lio.checkli.click();

        //Aguarda botão Continuar habilitar e clica
        browser.wait(Helpers.EC.elementToBeClickable(Lio.btcontinuar, 10000));
        Lio.btcontinuar.click();

        //Aguarda botão fechar do modal de sucesso
        browser.wait(Helpers.EC.visibilityOf(Lio.btfechar), 10000);
        expect(Lio.btfechar.isPresent()).toBe(true);

        //Clica para fechar o modal
        Lio.btfechar.click();
        
        //Realiza logout do site
        LoginPO.Logout();
        
    });



});