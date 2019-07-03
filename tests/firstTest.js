var uiControl = require("../web-controls/ui-controls");


describe('Test Banking application - Customer Login', function () {
    beforeAll(function () {
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login");
        browser.sleep(1000 * 5);
    });

    it('should click on customer login button and verify customer page opens', function () {
        var customerLogin = element(by.buttonText("Customer Login"));

        uiControl.click(customerLogin);
        browser.sleep(1000 * 5);
        browser.getCurrentUrl().then(currentURl => {
            console.log("Current URL: ", currentURl);
            browser.sleep(1000 * 5);
            expect(currentURl).toContain("customer");
        })
    });
});