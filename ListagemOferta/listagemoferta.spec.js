var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js')
var Helpers = require('../helpers.po.js');
var Listagem = require('../ListagemOferta/listagemoferta.po.js');



describe('ListagemOferta', function () {

    it('Verificar carregamento de card', function () {
        //"Ligando" o angular
        LoginPO.OnPrepare(false);

        // Acessa pagina
        LoginPO.Navigate();

        // Bloquea Push
        LoginPO.BloquearPush();

        //Realiza Login
        LoginPO.PreencherEC(LoginPO.usuarioLucas);
        Senha.PreencherSenha(Senha.senhaLucas);

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