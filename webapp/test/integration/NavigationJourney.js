/*global QUnit*/

sap.ui.define([
	"invoices/localService/mockserver",
	"sap/ui/test/opaQunit",
	"./pages/HelloPanel",
	"./pages/HelloPanel"
], function (mockserver, opaQunit) {
	"use strict";

	QUnit.module("Navigation Journey");

	opaQunit("Should open the Hello Dialog", function (Given, When, Then) {

		// Initialize the mock server
		mockserver.init();

		// Arrangements
		Given.iStartMyUIComponent({
			componentConfig: {
				name: "invoices",
				async: true
			},
			//hash: oOptions.hash,
			//autoWait: oOptions.autoWait
		});

		//Actions
		When.onTheAppPage.iSayHelloDialogButton();

		// Assertions
		Then.onTheAppPage.iSeeTheHelloDialog();

		//Cleanup
		Then.iTeardownMyApp();
	});
});
