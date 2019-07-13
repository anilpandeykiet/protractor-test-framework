import {browser, ElementFinder} from "protractor";

export class UiControls {

    static click(elementToClick) {
        return elementToClick.click();
    };

    static getUrl(urlToget, description?: string) {
        if (description != null) {
            console.log("description: ", description);
        }
        return browser.get(urlToget);
    }

    static sleep(timeInSeconds: number) {
        return browser.sleep(1000 * timeInSeconds);
    }

    static getCurrentUrl() {
        return browser.getCurrentUrl();
    }


}


export class test {

}