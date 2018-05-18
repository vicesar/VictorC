'use strict';

exports.config = {

    multiCapabilities: [
        { 'browserName': 'chrome', maxInstances: 1 },
    ],

    baseUrl: 'http://cielofidelidadedev.azurewebsites.net',
    //
    //Define os specs a serem testados
    specs: [
        './Login/*.spec.js',
        './Falegente/*.spec.js',
        './Meucadastro/*.spec.js',
        './Meuspontos/*.spec.js',
        './Simuladorpontos/*.spec.js'
    ],
    //Define quais suítes de testes serão testadas
    //suites: suites,
    suites: {
        login: './Login/*.spec.js',
        falegente: './Falegente/*.spec.js',
        meucadastro: './Meucadastro/*.spec.js',
        meuspontos: './Meuspontos/*.spec.js',
        simuladorpontos: './Simuladorpontos/*.spec.js',
    },
    //para Angular 2
    useAllAngular2AppRoots: true,
    restartBrowserBetweenTests: false,

    //Configuração para o jasmine Tests
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 360000,
        isVerbose: true,
        includeStackTrace: false,
    },
    //Timouts
    allScriptsTimeout: 60000,
    getPageTimeout: 60000,
    allScriptsTimeout: 60000,
    onPrepare: onPrepare,
};
function onPrepare() {

    browser.driver.manage().window().maximize();

}