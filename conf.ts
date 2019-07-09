import {browser} from "protractor";

exports.config = {
    directConnect: true,

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['--no-sandbox', '--disable-web-security', '--window-size=1920,1080', '--start-maximized'],
            prefs: {
                download: {
                    'prompt_for_download': false,
                    'directory_upgrade': true,
                    'default_directory': './tmp'
                }
            }
        }
    },

    // Framework to use. Jasmine is recommended.
    framework: 'jasmine',

    // Spec patterns are relative to the current working directory when
    // protractor is called.
    specs: ['tests/CustomerLoginTest.js'],

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true
    },
    onPrepare: () => {
        browser.driver.manage().window().setSize(1920, 1080);
        // browser.ignoreSynchronization = true;
        browser.waitForAngularEnabled(true);
    }
};