sap.ui.define(['sap/ui/core/mvc/Controller', 'util/Formatter'], function(Controller,Formatter){
	"use strict";
	Controller.extend('sap.ui.app.view.main', {

		onInit: function(){
			this._showFormFragment("General","Display");
			//this._showFormFragment("Succession","Display");
			this.modelParam = this.getOwnerComponent().getModel('modelParam');

		},
		handleEventPress: function(oE){
			if (! this._oEventPopover) {
				this._oEventPopover = sap.ui.xmlfragment("fragments.Popover", this);
				this.getView().addDependent(this._oEventPopover);
				this._oEventPopover.addAggregation( 'content',
					new sap.m.Table({
						width:"40rem",
						columns:[
							new sap.m.Column({
								header: new sap.m.Text({text: "{i18n>PersEvTableName}"})
							}),
							new sap.m.Column({
								header: new sap.m.Text({text: "{i18n>PersEvTableDate}"})
							}),
							new sap.m.Column({
								header: new sap.m.Text({text: "{i18n>PersEvTableDesc}"})
							})
						],
						items: {
							path: "model>/userEvents",
							template: new sap.m.ColumnListItem({
								cells: [
									new sap.m.Text({ text:"{model>name}"}),
									new sap.m.Text({ text:"{model>date}", wrapping:false}),
									new sap.m.Text({ text:"{model>desc}"}),
								]
							})
						}
					})
				)
			}
			
			var oButton = oE.getSource();
			jQuery.sap.delayedCall(0, this, function () {
				this._oEventPopover.openBy(oButton);
			});

		},
		/*handleStatusDialogPress: function(oE){
			if (! this._oStatusDialog) {
				this._oStatusDialog = new sap.m.SelectDialog({
					title: "______",
					items: {
						path: "modelParam>/statusCollection",
						template: new sap.m.StandardListItem({
							title: "{modelParam>statusId}"
						})
					}
				})//sap.ui.xmlfragment("fragments.SelectDialog", this);
				//this._oStatusDialog.setModel(this.getView().getModel());
			}
			this._oStatusDialog.open();
		},*/
		handleSuccessorDelete: function(){
			if (!this._succesorDeleteDialog) {
				this._succesorDeleteDialog = new sap.m.Dialog({
					title: '{i18n>PersTabsSuccessionDelDialogTitle}',
					content: [
						new sap.m.Toolbar({
							content: [
								new sap.m.Title({text: '{i18n>PersTabsSuccessionDelDialogSubTitle}'})
							]
						}).addStyleClass("sapUiTinyMarginBottom"),
						new sap.m.Select({
							width: "80%",
							items: [
								new sap.ui.core.Item({text:"Другое"})
							]
						}),
						new sap.m.TextArea({
							width: "80%",
							rows: 4
						})
					],
					beginButton: new sap.m.Button({
						text: '{i18n>Cancel}',
						press: (function () {
							this._succesorDeleteDialog.close();
						}).bind(this)
					}),
					endButton: new sap.m.Button({
						text: '{i18n>Save}',
						press: (function () {
							this._succesorDeleteDialog.close();
						}).bind(this)
					}),
				}).addStyleClass("sapUiSizeCompact")
			}
			this.getView().addDependent(this._succesorDeleteDialog);
			this._succesorDeleteDialog.open();
		},
		handleDefineSuccessorPress: function(oE){
			var key = oE.getSource().getCustomData().filter(function(e){ return e.getKey()==='eventType'})[0].getValue();
			var title = oE.getSource().getText();
			console.log(key,title);
			if (!this._defineSuccessorDialog) {
				this._defineSuccessorDialog = new sap.m.Dialog({
					contentWidth: "40rem",
					content: new sap.ui.xmlfragment("fragments.dialog.defineSuccessor", this),
					beginButton: new sap.m.Button({
						text: '{i18n>Cancel}',
						press: (function () {
							this._defineSuccessorDialog.close();
						}).bind(this)
					}),
					endButton: new sap.m.Button({
						text: '{i18n>Save}',
						press: (function () {
							this._defineSuccessorDialog.close();
						}).bind(this)
					}),
					/*afterClose: (function() {
						this._defineSuccessorDialog.destroy();
					}).bind(this)*/
				}).addStyleClass("sapUiSizeCompact sapUiNoContentPadding")
			}
			this._defineSuccessorDialog.setTitle(title);
			this.getView().addDependent(this._defineSuccessorDialog);
			this._defineSuccessorDialog.open();
		},
		handleEditPress: function () {

			//this._oSupplier = jQuery.extend({}, this.getView().getModel().getData().SupplierCollection[0]);
			this._toggleButtonsAndView(true);

		},
		handleSavePress : function () {

			this._toggleButtonsAndView(false);

		},
		handleCancelPress : function () {

			//Restore the data
			/*var oModel = this.getView().getModel();
			var oData = oModel.getData();

			oData.SupplierCollection[0] = this._oSupplier;

			oModel.setData(oData);*/
			this._toggleButtonsAndView(false);

		},
		handleTabSelect: function(oE) {
			this._toggleButtonsAndView( false);
		},
		_toggleButtonsAndView : function (bEdit) {
			var oView = this.getView();

			oView.byId("edit").setVisible(!bEdit);
			oView.byId("save").setVisible(bEdit);
			oView.byId("cancel").setVisible(bEdit);

			var tabKey = oView.byId('idIconTabBar').getSelectedKey()

			var btnsVisible = this.modelParam.getData().btnsVisible;
			Object.keys(btnsVisible).forEach(function(e){btnsVisible[e]=false});
			if (btnsVisible.hasOwnProperty(tabKey)) btnsVisible[tabKey] = !bEdit;
			this.modelParam.setData({btnsVisible:btnsVisible},true)	

			this._showFormFragment(tabKey, bEdit ? "Change" : "Display");
		},
		_formFragments: {},
		_showFormFragment : function (tab,type) {
			var oPanel = this.getView().byId("idTab"+tab);

			oPanel.removeAllContent();
			oPanel.addContent(this._getFormFragment([tab,type].join('')));
		},
		_getFormFragment: function (sFragmentName) {
			var oFormFragment = this._formFragments[sFragmentName];

			if (oFormFragment) {
				return oFormFragment;
			}

			oFormFragment = sap.ui.xmlfragment( "fragments.Tab" + sFragmentName, this);

			return this._formFragments[sFragmentName] = oFormFragment;
		},

	});
});