sap.ui.define([
    "sap/ui/base/ManagedObject",
    "sap/ui/core/Fragment"
],
    /**
     * @param {typeof sap.ui.base.ManagedObject}    ManagedObject 
     * @param {typeof sap.ui.core.Fragment}         Fragment
     */
    function (ManagedObject, Fragment) {
        "use strict";

        return ManagedObject.extend("invoices.cotroller.helloDialog", {

            constructor: function (oView) {
                this._oView = oView;
            },
            exit: function () {
                delete this._oView;
            },
            open: function () {

                const oView = this._oView;

                if (!oView.byId("helloDialog")) {

                    // create dialog LAZILY
                    let oFragmentController = {
                        onCloseDialog: function () {
                            oView.byId("helloDialog").close();
                        },
                    };

                    // Load asyncronous XML fragment
                    Fragment.load({
                        id: oView.getId(),
                        name: "invoices.fragment.HelloDialog",
                        controller: oFragmentController

                    }).then(function (oDialog) {
                        oView.addDependent(oDialog);
                        oDialog.open();
                    });
                } else {
                    oView.byId("helloDialog").open();
                }
            }
        });
    });