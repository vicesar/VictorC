//import { Browser } from 'selenium-webdriver';
// alter test
//falegente.spec.js

var FaleGente = require('./falegente.po.js');
var LoginPO = require('../login/login.po.js');
var Helpers = require('../helpers.po.js');

describe('Fale com a gente', function () {


    xit('Enviar mensagem com usuário deslogado', function () {
        LoginPO.Navigate();
        FaleGente.falecomagente.click();
        browser.wait(Helpers.EC.presenceOf(FaleGente.campoNome), 50000);
    });






});