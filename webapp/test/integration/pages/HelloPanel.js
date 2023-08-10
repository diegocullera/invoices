sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/ui/test/actions/Press"
],
	/**
	 * 
	 * @param {typeof sap.ui.test.Opa5} Opa5 
	 */
	function (Opa5, Press) {
		"use strict";
		//var sViewName = "App";

		Opa5.createPageObjects({
			onTheAppPage: {

				actions: {
					iSayHelloDialogButton: function () {
						return this.waitFor({
							id: "helloDialogButton",
							viewName: "invoices.view.HelloPanel",
							actions: new Press(),
							errorMessage: "Did not find the 'Say Hello Dialog Button' on the HelloPanel view"
						});
					}
				},

				assertions: {
					iSeeTheHelloDialog: function () {
						return this.waitFor({
							controlType: "sap.m.Dialog",
							success: function () {
								Opa5.assert.ok(true, "The Dialog view is displayed");
							},
							errorMessage: "Did not find the Dialog view"
						});
					}
				}
			}
		});

	});
