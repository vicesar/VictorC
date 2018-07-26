var LoginPO = require('../Login/login.po.js');
var Senha = require('../Login/senha.po.js');
var Home = require('../Home/home.po.js')
var Helpers = require('../helpers.po.js');
var DescontoMaquina = require('../DescontoMaquina/descontomaquina.po.js');
var MeuCadastro = require('../MeuCadastro/meucadastro.po.js');



describe('DescontoMaquina', function () {

    it('Verificar carregamento da listagem de POs', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);

        // Acessa pagina
        LoginPO.Navigate();

        // Bloquea Push
        browser.sleep(10000);
        LoginPO.BloquearPush();

        //Realiza Login
        LoginPO.PreencherEC(LoginPO.usuarioLucas);
        Senha.PreencherSenha(Senha.senhaLucas);

        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        // Aguarda a presença do ícone do menu lateral e clica
        browser.sleep(8000);
        Home.btMenu.click();

        // Aguarda a presença do link de "Meu cadastro" e clica em "Desconto no aluguel da maquina"
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.linkCadastro), 50000);
        Home.linkDesconto.click();

        // Espera apresentar div de listagem de POS
        browser.wait(Helpers.EC.visibilityOf(DescontoMaquina.divListagemPos), 100000);
        expect(DescontoMaquina.divListagemPos.isPresent()).toBe(true);

        // "Deslogar"
        LoginPO.Logout();
    });

});