(() => {
    'use strict'

    Window_ItemCategory.prototype.maxCols = function () {
        return 2;
    };

    Window_ItemCategory.prototype.makeCommandList = function () {
        this.addCommand(TextManager.item, 'item');
        this.addCommand(TextManager.keyItem, 'keyItem');
    };

})();