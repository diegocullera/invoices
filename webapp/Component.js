sap.ui.define([
    'sap/ui/core/UIComponent',
    "invoices/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
],
    /**
     * @param {typeof sap.ui.Device} Device
     */
    function (UIComponent, Models, ResourceModel, HelloDialog, Device) {
        'use strict';

        return UIComponent.extend("invoices.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {

                UIComponent.prototype.init.apply(this, arguments);

                this.setModel(Models.createRecipient());

                // Comento esta parte pq ya se carga desde el manifest json
                // let oI18n = new ResourceModel({
                //     bundleName: "invoices/i18n/i18n"
                // });
                // this.setModel(oI18n, "i18n");

                //set the Device Model
                this.setModel(Models.createDeviceModel(), "device");


                this._helloDialog = new HelloDialog(this.getRootControl());

                //create the views based on the url/hash
                this.getRouter().initialize();
            },

            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            },

            getContentDensityClass: function() {
                if ( !Device.support.touch ){
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
                return this._sContentDensityClass;
            }

        })

    });