sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/Device"
],
/**
 * 
 * @param {typeof sap.ui.model.json.JSONModel}  JSONModel 
 * @param {typeof sap.ui.Device}                Device 
 * @returns 
 */
function(JSONModel, Device) {
    'use strict';

    let oModel = {

        createRecipient: function () {

            let oData = {
                recipient: {
                    name: "Diego"
                }
            };
            let oModel = new JSONModel(oData);
            return oModel;
            
        },

        createDeviceModel: function () {
            var oModel = new JSONModel(Device);
            oModel.setDefaultBindingMode("OneWay");
            return oModel;
        }

    };

    return oModel;
    
});