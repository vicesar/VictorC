//meucadastro.spec.js

var LoginPO = require('../Login/login.po.js');
var Home = require('../Home/home.po.js');
var Helpers = require('../helpers.po.js');
var Senha = require('../Login/senha.po.js')
var MeuCadastro = require('../MeuCadastro/meucadastro.po.js');



fdescribe('MeuCadastro', function () {

    fit('Alterar Dados Pessoais do participante', function () {
        // Realiza login
        LoginPO.Navigate();
        LoginPO.FillEc(LoginPO.usuarioCPontos);
        LoginPO.btAcessar.click();
        browser.wait(Helpers.EC.presenceOf(Senha.campoSenha), 10000);
        Senha.FillSenha(LoginPO.senhaCPontos);
        Senha.btEntrar.click();

        // "Desligando" o angular
        LoginPO.OnPrepare(true);


        // Aguarda a presença do ícone do menu lateral e clica
        browser.sleep(8000);
        Home.btMenu.click();

        // Aguarda a presença do link de "Meu cadastro" e clica
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.linkCadastro), 50000);
        MeuCadastro.linkCadastro.click();

        // Aguarda a presença o botão de "Dados Pessoais" e clica - Alterar campo data de nascimento e Salva
        browser.wait(Helpers.EC.presenceOf(MeuCadastro.btnDadosP), 50000);
        MeuCadastro.btnDadosP.click();
        MeuCadastro.FillDataNasc(MeuCadastro.dataNasc);
        MeuCadastro.btnSalvar.click();

        // Espera que apresente o botão "Fechar" do modal de sucesso
        expect(MeuCadastro.btnFechar.isPresent()).toBe(true);
    });




















});