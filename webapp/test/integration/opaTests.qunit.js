/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["invoices/test/integration/NavigationJourney"
], function () {
	QUnit.start();
});
