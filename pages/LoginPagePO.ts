import {by, element} from "protractor";
import {UiControls} from "../web-controls/ui-controls";

var LoginPageLocators = {
    ALL_BUTTONS: element.all(by.css(".center button")),
    CUSTOMER_LOGIN_BTN: element(by.buttonText("Customer Login")),
    BANK_MANAGER_LOGIN_BTN: element(by.buttonText("Bank Manager Login")),
    HOME_BTN: element(by.buttonText("Home"))
};


export class LoginPagePO {
    static getAllButtonsCount() {
        console.log("Getting all buttons count on Login page.");
        return LoginPageLocators.ALL_BUTTONS.count();
    }

    static clickCustomerLogin() {
        console.log("CLicking Login CUSTOMER_LOGIN_BTN");
        return LoginPageLocators.CUSTOMER_LOGIN_BTN.click();
    };

    static clickBankManagerLogin () {
        console.log("CLicking Login BANK_MANAGER_LOGIN_BTN");
        // return LoginPageLocators.BANK_MANAGER_LOGIN_BTN.click();
        return UiControls.click(LoginPageLocators.BANK_MANAGER_LOGIN_BTN);
    };

    static clickHomeButton() {
        console.log("CLicking Login HOME_BTN");
        return UiControls.click(LoginPageLocators.HOME_BTN);
        //browser.manage().alertIsPresent().
    };
}