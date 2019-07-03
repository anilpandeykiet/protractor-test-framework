var LoginPageObject = require("../pages/LoginPagePO");


describe('Login Page', function () {

    beforeAll(function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        browser.sleep(1000 * 5);
    });

    it('should launch home page successfully', function () {
        expect(LoginPageObject.getAllButtonsCount()).toEqual(2);
        expect(browser.getCurrentUrl()).toContain("login");
    });

    it('should open customer home page successfully', function () {
        LoginPageObject.clickCustomerLogin();
        browser.sleep(1000 * 3);
        expect(browser.getCurrentUrl()).toContain("customer");
        LoginPageObject.clickHomeButton();
        browser.sleep(1000 * 3);
    });

    it('should open bank manager home page successfully', function () {
        LoginPageObject.clickBankManagerLogin();
        browser.sleep(1000 * 3);
        expect(browser.getCurrentUrl()).toContain("manager");
        LoginPageObject.clickHomeButton();
        browser.sleep(1000 * 3);
    });
});