var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js')
var Helpers = require('../helpers.po.js');
var Listagem = require('../ListagemOferta/listagemoferta.po.js');



describe('ListagemOferta', function () {

    it('Carregar pagina', function () {
        //"Ligando" o angular
        LoginPO.OnPrepare(false);

        // Realiza login
        LoginPO.Navigate();
        LoginPO.PreencherEC(LoginPO.usuarioSPontos);
        Senha.PreencherSenha(Senha.senhaSPontos);

        //"Desligando" o angular
        LoginPO.OnPrepare(true);

        //Abre tela de Ofertas
        browser.sleep(12000);
        Home.btOferta.click();

        //Espera que tenha card
        browser.wait(Helpers.EC.presenceOf(Listagem.card), 50000);
        expect(Listagem.card.isPresent()).toBe(true);

        // "Deslogar"
        LoginPO.Logout();
    });



});