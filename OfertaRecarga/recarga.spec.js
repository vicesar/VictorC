var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Listagem = require('../ListagemOferta/listagemoferta.po.js');
var Recarga = require('../OfertaRecarga/recarga.po.js');



describe('Recarga', function () {

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
        browser.wait(Helpers.EC.visibilityOf(Listagem.recarga), 10000);
        Listagem.recarga.click();
        
        // Aguarda carregamento e clica em Contratar
        browser.sleep(12000);
        Recarga.contratar.click();
        
        // Espera que carregue o botao Fechar do modal de sucesso
        browser.wait(Helpers.EC.visibilityOf(Recarga.fechar), 10000);
        expect(Recarga.fechar.isPresent()).toBe(true);

        // Clicar no botao Fechar do modal de sucesso
        Recarga.fechar.click();

        // "Deslogar"
        LoginPO.Logout();

    });



});