sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/base/Log"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller}   Controller
     * @param {typeof sap.m.MessageToast}           MessageToast
     * @param {typeof sap.ui.model.json.JSONModel}  JSONModel
     * @param {typeof sap.ui.core.Fragment}         Fragment
     * @param {typeof sap.base.Log}                 Log
     */
    function (Controller, MessageToast, Log) {
        'use strict';

        return Controller.extend("invoices.controller.HelloPanel", {

            onBeforeRendering: function() {
                window.message = 'Log message - onBeforeRendering';
                Log.info(window.message);
                Log.error(window.message);
            },
            onAfterRendering: function() {
                debugger;
            },
            onShowHello: function () {
                // read text from i18n model
                let oBundle = this.getView().getModel("i18n").getResourceBundle(),

                    // read property from data model
                    msg = this.getView().getModel().getProperty("/recipient/name");
                MessageToast.show(oBundle.getText("helloMsg", [msg]));
            },


            onOpenDialog: function () {

                this.getOwnerComponent().openHelloDialog();

                /*
               const oView = this.getView();

               if (!this.byId("helloDialog")) {
                   Fragment.load({
                       id: oView.getId(),
                       name: "invoices.fragment.HelloDialog",
                       controller: this

                   }).then(function (oDialog) {
                       oView.addDependent(oDialog);
                       oDialog.open();
                   });
               } else {
                   this.byId("helloDialog").open();
               }*/

            },

            /*
            onCloseDialog: function () {
                this.byId("helloDialog").close();
            },
            */

        });

    });