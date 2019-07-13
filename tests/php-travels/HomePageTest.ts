import {HomePagePO} from "../../pages/php-travels-po/HomePagePO";
import {UiControls} from "../../web-controls/ui-controls";

describe('Home Page', function () {
    beforeAll(function () {
        UiControls.getUrl("https://www.phptravels.net/");
    });


    it('should Sign up user for PHP travels.', function () {
        HomePagePO.signUp().then(() => {
            HomePagePO.verifySignupPage().then(data => {
                console.log("data: ", data);
                expect(data.urlText).toContain("register");
                expect(data.formHeader).toEqual("SIGN UP");
            })
        })
    });
});