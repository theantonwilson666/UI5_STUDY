sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "travel_model/formatter/formatter"
],
    function (Controller, MessageToast, Formatter) {
        "use strict";

        return Controller.extend("travel_model.controller.App", {

            formatter : Formatter,
            
            onInit: function () {

                debugger;

                this.getOwnerComponent().getRouter()
                    .getRoute("mainpage")
                    .attachPatternMatched(this._onRouteMatched, this);
            },

            _onRouteMatched: function(oEvent){
                //TODO
                // this.getView().addContent();
            }


        });
    });