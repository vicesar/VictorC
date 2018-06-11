var LoginPO = require('../Login/login.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Senha = require('../Login/senha.po.js');
var MeuCadastro = require('../MeuCadastro/meucadastro.po.js');



describe('MeuCadastro', function () {

    it('Alterar Dados Pessoais do participante', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);
    
        // Realiza login
        LoginPO.Navigate();
        LoginPO.PreencherEC(LoginPO.usuarioSPontos);
        Senha.PreencherSenha(Senha.senhaSPontos);

        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        // Aguarda a presença do ícone do menu lateral e clica
        browser.sleep(12000);
        Home.btMenu.click();

        // Aguarda a presença do link de "Meu cadastro" e clica
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.linkCadastro), 50000);
        MeuCadastro.linkCadastro.click();

        // Aguarda a presença o botão de "Dados Pessoais" e clica - Alterar campo data de nascimento e Salva
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.btnDadosP), 50000);
        MeuCadastro.btnDadosP.click();
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.campoNome), 50000);
        MeuCadastro.FillDataNasc(MeuCadastro.dataNasc);
        MeuCadastro.btnSalvar.click();
        
        // Aguarda carregar modal e espera que apresente o botão "Fechar" do modal de sucesso
        browser.wait(Helpers.EC.visibilityOf(MeuCadastro.modal), 50000);
        expect(MeuCadastro.btnFechar.isPresent()).toBe(true);

        //Clica no botão "Fechar"
        MeuCadastro.btnFechar.click();

        //Realizar "Logout"
        LoginPO.Logout();

    });


    it('Alterar Dados Comerciais do participante', function () {
        // "Ligando" o angular
        LoginPO.OnPrepare(false);
        
        // Realiza login
        LoginPO.Navigate();
        LoginPO.PreencherEC(LoginPO.usuarioSPontos);
        Senha.PreencherSenha(Senha.senhaSPontos);

        // "Desligando" o angular
        LoginPO.OnPrepare(true);

        // Aguarda a presença do ícone do menu lateral e clica
        browser.sleep(12000);
        Home.btMenu.click();

        // Aguarda a presença do link de "Meu cadastro" e clica
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.linkCadastro), 50000);
        MeuCadastro.linkCadastro.click();

        // Aguarda a presença o botão de "Dados Comerciais" e clica - Alterar campo Numero e Salva
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.btnDadosP), 50000);
        MeuCadastro.btnDadosC.click();
        browser.wait(Helpers.EC.visibilityOf(MeuCadastro.campoNomeT), 50000);
        MeuCadastro.FillNumero(MeuCadastro.numero);
        MeuCadastro.btnSalvar.click();

        // Aguarda carregar modal e espera que apresente o botão "Fechar" do modal de sucesso
        browser.wait(Helpers.EC.visibilityOf(MeuCadastro.modal), 50000);
        expect(MeuCadastro.btnFechar.isPresent()).toBe(true);

        //Clica no botão "Fechar"
        MeuCadastro.btnFechar.click();

        //Realizar "Logout"
        LoginPO.Logout();
        
    });



















});