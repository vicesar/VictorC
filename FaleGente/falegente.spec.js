//falegente.spec.js

var FaleGente = require('../FaleGente/falegente.po.js');
var LoginPO = require('../Login/login.po');
var Helpers = require('../helpers.po.js');

fdescribe('FaleGente', function () {
    
    fit('Enviar mensagem com sucesso', function(){
        LoginPO.Navigate();
        browser.wait(Helpers.EC.presenceOf(FaleGente.falecomgente), 10000);
        FaleGente.falecomgente.click();
        browser.wait(Helpers.EC.presenceOf(FaleGente.campoNome), 10000)
        FaleGente.FillCampos('Cesar Silva','cesar@email.com','948.934.120-78','(11) 99630-2444');
        browser.sleep(5000);
    });
    

});