//falegente.spec.js

var FaleGente = require('../FaleGente/falegente.po.js');
var LoginPO = require('../Login/login.po');
var Helpers = require('../helpers.po.js');
var mySelect = new Helpers.SelectWrapper(by.id('idAssunto'));

describe('FaleGente', function () {
    
    it('Enviar mensagem com sucesso', function(){
        LoginPO.Navigate();

        //Aguarda a presença do "Fale com a gente"
        browser.wait(Helpers.EC.presenceOf(FaleGente.faleComGente), 10000);
        FaleGente.faleComGente.click();

        //Aguarda a presença do campo de mensagem para preencher formulário
        browser.wait(Helpers.EC.presenceOf(FaleGente.campoMensagem), 10000)
        FaleGente.FillCampos('Cesar Silva','cesar@email.com','948.934.120-78','(11) 99630-2444','Teste ok');

        //Seleciona opção no combobox de assunto e envia mensagem
        mySelect.selectByValue('1: 3');
        FaleGente.btEnviar.click();

        //Espera que apresente o modal de sucesso
        expect(FaleGente.modalSucesso.isPresent());
    });
    

});