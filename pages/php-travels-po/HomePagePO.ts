import {by, element} from "protractor";
import {UiControls} from "../../web-controls/ui-controls";

const CSS = by.css;

class UILocators {
    static readonly HOME_PAGE_ICON = element(by.css(".navbar-brand.go-right"));
    static readonly MY_ACCOUNT_TEXT = element(by.css(".nav.navbar-nav.navbar-right.hidden-sm.go-left #li_myaccount .dropdown-toggle.go-text-right"));
    static readonly MY_ACCOUNT_CHILD_LINKS = element.all(by.css(".nav.navbar-nav.navbar-right.hidden-sm.go-left #li_myaccount .dropdown-menu li a"));
    static readonly SIGNUP_HEADER = element(CSS("#hero .go-text-right.panel-heading"));
}


export class HomePagePO {
    static signUp() {
        return HomePagePO.clickMyAccountLink().then(() => {
            return HomePagePO.clickOnSignUpBtn();
        })
    }


    // 1. Go to home page
    // 2. CLick on my Account Link
    //3. Click on sign up button
    //4. Verify signuo page is opened

    static verifySignupPage() {
        return UiControls.getCurrentUrl().then(currentUrl => {
            return UILocators.SIGNUP_HEADER.getText().then(headerTxt => {
                return {urlText: currentUrl, formHeader: headerTxt};
            })
        })
    }

    private static clickMyAccountLink() {
        return UiControls.click(UILocators.MY_ACCOUNT_TEXT)
    }

    private static clickOnSignUpBtn() {
        return UiControls.click(UILocators.MY_ACCOUNT_CHILD_LINKS.get(1));
    }
}