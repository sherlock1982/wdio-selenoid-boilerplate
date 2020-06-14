const webdriverio = require('webdriverio');
const utils = require("@wdio/utils");
const Mocha = require('mocha');
const chrome = require('../chrome.conf')
require('expect-webdriverio');

const config = {
    hostname: 'selenium.3cx.test',
    path: '/wd/hub',
    sync: true,
    capabilities: chrome,
};

const NOOP = function NOOP() {
};

async function prepareEnvironment() {
    // Create our own browser object
    global.browser = await webdriverio.remote(config);
    global.$ = selector => browser.$(selector);
    global.$$ = selector => browser.$$(selector);
}

const originalRun = Mocha.prototype.run;

Mocha.prototype.run = function (fn) {
    let self = this;

    this.suite.on('pre-require', function () {
        // Monkey patch Mocha
        ['before', 'beforeEach', 'it', 'after', 'afterEach'].forEach(function (fnName) {
            utils.runTestInFiberContext(['it', 'it.only'].indexOf(fnName) > -1, NOOP, () => [], NOOP, () => [], fnName, "");
        });
    });

    prepareEnvironment()
        .then(function () {
            originalRun.apply(self, [function () {
                browser.deleteSession();
                fn && fn();
            }])
        })

};
