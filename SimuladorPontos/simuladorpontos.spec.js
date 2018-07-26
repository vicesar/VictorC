var LoginPO = require('../Login/login.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Senha = require('../Login/senha.po.js');
var MeuCadastro = require('../MeuCadastro/meucadastro.po.js');
var Simulador = require('../SimuladorPontos/simuladorpontos.po.js');



describe('SimuladorPontos', function () {

    it('Carregar tela de simulador de pontos', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);

        // Acessa pagina
        LoginPO.Navigate();

        // Bloquea Push
        LoginPO.BloquearPush();

        // Realiza login
        LoginPO.PreencherEC(LoginPO.usuarioLucas);
        Senha.PreencherSenha(Senha.senhaLucas);

        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        // Aguarda a presença do ícone do menu lateral e clica
        browser.sleep(10000);
        Home.btMenu.click();

        // Aguarda a presença do link de "Meu cadastro" e clica em "Simulador de pontos"
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.linkCadastro), 50000);
        Home.linkSimulador.click();

        // Espera a div principal da tela
        browser.wait(Helpers.EC.visibilityOf(Simulador.divSimuladorPontos), 50000);
        expect(Simulador.divSimuladorPontos.isPresent()).toBe(true);

        // "Deslogar"
        LoginPO.Logout();

    });

    it('Apresentar resultado de simulacao', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);

        // Realiza login
        LoginPO.Navigate();
        LoginPO.PreencherEC(LoginPO.usuarioLucas);
        Senha.PreencherSenha(Senha.senhaLucas);

        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        // Aguarda a presença do ícone do menu lateral e clica
        browser.sleep(10000);
        Home.btMenu.click();

        // Aguarda a presença do link de "Meu cadastro" e clica
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.linkCadastro), 50000);
        Home.linkSimulador.click();

        // Aguarda a div principal da tela e realiza simulação de pontos com o valor de vendas
        browser.wait(Helpers.EC.visibilityOf(Simulador.divSimuladorPontos), 50000);
        Simulador.FillValores(Simulador.valor1, Simulador.valor2);
        browser.wait(Helpers.EC.elementToBeClickable(Simulador.btCalcular), 50000);
        Simulador.btCalcular.click();

        // Espera que apresente botão de catálogo
        browser.wait(Helpers.EC.visibilityOf(Simulador.btCatalogo), 50000);
        expect(Simulador.btCatalogo.isPresent()).toBe(true);

        // "Deslogar"
        LoginPO.Logout();

    });


















});