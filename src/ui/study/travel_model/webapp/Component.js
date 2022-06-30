sap.ui.define([
    "sap/ui/core/UIComponent"
], function(UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("travel_model.Component", {

        metadata: {
            manifest: "json"
        },

        /**
         * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
         * @public
         * @overrides
         */
        init: function() {
            UIComponent.prototype.init.apply(this, arguments);
            this.getRouter().initialize();
        }
    });
});