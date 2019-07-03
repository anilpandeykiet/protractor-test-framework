var LoginPageLocators = {
    ALL_BUTTONS: element.all(by.css(".center button")),
    CUSTOMER_LOGIN_BTN: element(by.buttonText("Customer Login")),
    BANK_MANAGER_LOGIN_BTN: element(by.buttonText("Bank Manager Login")),
    HOME_BTN: element(by.buttonText("Home"))
};


var LoginPagePO = function () {

    this.getAllButtonsCount = function () {
        console.log("Getting all buttons count on Login page.");
        return LoginPageLocators.ALL_BUTTONS.count();
    };

    this.clickCustomerLogin = function () {
        console.log("CLicking Login CUSTOMER_LOGIN_BTN");
        return LoginPageLocators.CUSTOMER_LOGIN_BTN.click();
    };

    this.clickBankManagerLogin = function () {
        console.log("CLicking Login BANK_MANAGER_LOGIN_BTN");
        return LoginPageLocators.BANK_MANAGER_LOGIN_BTN.click();
    };

    this.clickHomeButton = function () {
        console.log("CLicking Login HOME_BTN");
        return LoginPageLocators.HOME_BTN.click();
    };
};

module.exports = new LoginPagePO();