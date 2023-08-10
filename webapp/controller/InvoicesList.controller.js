// @ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormatter',
    'sap/ui/model/Filter',
    'sap/ui/model/FilterOperator'
],
    /**
     * 
     * @param {typeof sap.ui.core.mvc.Controller}   Controller 
     * @param {typeof sap.ui.model.json.JSONModel}  JSONModel
     * @param {typeof sap.ui.model.Filter}  Filter
     * @param {typeof sap.ui.model.FilterOperator}  FilterOperator
     */
    function (Controller, JSONModel, InvoicesFormatter, Filter, FilterOperator) {
        'use strict';

        return Controller.extend("invoices.controller.InvoicesList", {

            formatter: InvoicesFormatter,

            onInit: function () {
                var oViewModel = new JSONModel({
                    usd: "USD",
                    eur: "EUR"
                });
                this.getView().setModel(oViewModel, "currency");
            },

            onFilterInvoices: function (oEvent) {
                
                // Añadir dependencias
                const aFilter = []; //Filtro vacío por si no se selecciona nada y dan a la lupa
                const sQuery = oEvent.getParameter("query"); // Obtenemos la query con el parameter query

                if (sQuery) {
                    // creamos el filtro para el field "ProductName" y le indicamos la query
                    aFilter.push( new Filter("ProductName", FilterOperator.Contains, sQuery ));
                };

                // En que lista de la vista realizamos el filtro
                const oList = this.getView().byId("_IDGenList1");

                // Para todos los items
                const oBinding = oList.getBinding("items");

                //Aplicamos para todos los items el filtro
                oBinding.filter(aFilter);
            },

            navigateToDetails: function (oEvent) {

                const oItem = oEvent.getSource();

                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Details", {
                    invoicePath: window.encodeURIComponent(oItem.getBindingContext("northwind").getPath().substr(1))

                });
            }
        });
    });