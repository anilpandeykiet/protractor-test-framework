import {browser} from "protractor";
import {LoginPagePO} from "../pages/LoginPagePO";
import {UiControls} from "../web-controls/ui-controls";


var loginUrl = "http://www.way2automation.com/angularjs-protractor/banking/#/login";

describe('Login Page', function () {

    beforeAll(function () {
        UiControls.getUrl(loginUrl, "Trying to get URL: " + loginUrl);
        UiControls.sleep(5);
    });

    it('should launch home page successfully', function () {
        expect(LoginPagePO.getAllButtonsCount()).toEqual(2);
        expect(UiControls.getCurrentUrl()).toContain("login");
    });

    it('should open customer home page successfully', function () {
        LoginPagePO.clickCustomerLogin();
        UiControls.sleep(3);
        expect(UiControls.getCurrentUrl()).toContain("customer");
        LoginPagePO.clickHomeButton();
        UiControls.sleep(3);
    });

    it('should open bank manager home page successfully', function () {
        LoginPagePO.clickBankManagerLogin();
        UiControls.sleep(3);
        expect(UiControls.getCurrentUrl()).toContain("manager");
        LoginPagePO.clickHomeButton();
        UiControls.sleep(3);
    });
});