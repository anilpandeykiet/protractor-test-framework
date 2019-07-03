var uiControl = function () {
    this.click = function (elementToClick) {
        return elementToClick.click();
    }
};

module.exports = new uiControl();