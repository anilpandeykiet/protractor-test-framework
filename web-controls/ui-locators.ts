import {by, element, ElementFinder, error} from "protractor";
import NoSuchElementError = error.NoSuchElementError;

export class UiLocators {

    static findById(idText: string, parent?: ElementFinder) {
        if (parent != null) {
            return parent.element(by.id(idText));
        } else {
            return element(by.id(idText));
        }
    }

    static findAllById(idText: string, parent?: ElementFinder, elementDescription?: string) {
        try {
            if (parent != null) {
                return parent.all(by.id(idText));
            } else {
                return element.all(by.id(idText));
            }
        } catch (e) {
            if (e instanceof NoSuchElementError) {
                console.log("Element by Text : " + idText + " not found");
                console.log(elementDescription);
                throw e;
            }
        }
    }

    static findByClass(name: string) {
        return element(by.className(name));
    }
}