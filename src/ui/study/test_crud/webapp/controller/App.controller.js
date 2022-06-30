sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "test_crud/formatter/formatter"
],
    function (Controller, MessageToast, JSONModel, Formatter) {
        "use strict";

        return Controller.extend("test_crud.controller.App", {

            formatter: Formatter,

            Data: {
                messages: [
                    {
                        Text: "Test message 1",
                        Number: 1
                    },

                    {
                        Text: "Test message 2",
                        Number: 2
                    },

                    {
                        Text: "Test message 3",
                        Number: 3
                    }
                ]
            },

            onInit: function () {

                this.getOwnerComponent().getRouter()
                    .getRoute("mainpage")
                    .attachPatternMatched(this._onRouteMatched, this);
            },

            _onRouteMatched: function (oEvent) {
                var oJSONModel = new JSONModel(this.Data);
                this.getView().byId('_Messages-List').setModel(oJSONModel);
            },


            addItem: function () {
                
                this.Data.messages.push({
                    Text: "New message",
                    Number: this.Data.messages.length + 1
                });

                this.getView().byId('_Messages-List').getModel().updateBindings(true)
            }


        });
    });