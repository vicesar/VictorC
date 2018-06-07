var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Listagem = require('../ListagemOferta/listagemoferta.po.js');
var Recarga = require('../OfertaRecarga/recarga.po.js');





describe('Recarga', function () {


    it('Contratar a oferta', function () {
        //"Ligando" o angular
        LoginPO.OnPrepare(false);
        
        // Realiza login
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
        browser.wait(Helpers.EC.visibilityOf(Listagem.recarga), 10000);
        Listagem.recarga.click();
        
        //Aguarda carregamento e clica em Contratar
        browser.sleep(12000);
        Recarga.contratar.click();
        
        //Espera que carregue o botao Fechar do modal de sucesso
        browser.wait(Helpers.EC.visibilityOf(Recarga.fechar), 10000);
        expect(Recarga.fechar.isPresent()).toBe(true);

        //Clicar no botao Fechar do modal de sucesso
        Recarga.fechar.click();

        // "Deslogar"
        LoginPO.Logout();

    });



});