sap.ui.controller("sap.ui.app.view.main", {
	onInit: function () {
		this._showFormFragment("TabGeneral", "Display");
		// проверка, если акк рабочего, если нет то PCC
		var Worker = true;
		if (Worker) {
			this._showFormFragment("TabEvalWorker", "Display");
		} else {
			this._showFormFragment("TabEvalPcc", "Display");
		}
		this._showFormFragment("TabProfExpBtn", "Display");
		//TODO убрать 1px бордер снизу .sapMPanelContent:not(.sapMPanelBGTransparent)
		this._showFormFragment("TabProfExp1", "Display");
	},
	handleEventPress: function (oE) {
		if (!this._oEventPopover) {
			this._oEventPopover = sap.ui.xmlfragment("Fragments.Popover", this);
			this.getView().addDependent(this._oEventPopover);
			this._oEventPopover.addAggregation('content',
					new sap.m.Table({
						width: "40rem",
						columns: [
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
									new sap.m.Text({text: "{model>name}"}),
									new sap.m.Text({text: "{model>date}", wrapping: false}),
									new sap.m.Text({text: "{model>desc}"})
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
	_formFragments: {},
	_showFormFragment: function (tab, type) {
		var oPanel = this.getView().byId("id" + tab);

		oPanel.removeAllContent();
		oPanel.insertContent(this._getFormFragment([tab, type].join('')));
	},
	_getFormFragment: function (sFragmentName) {
		var oFormFragment = this._formFragments[sFragmentName];

		if (oFormFragment) {
			return oFormFragment;
		}

		oFormFragment = sap.ui.xmlfragment("Fragments." + sFragmentName, this);

		return this._formFragments[sFragmentName] = oFormFragment;
	},

	SegmLeftBtnPress: function () {
		this.handleCancelPress();
		var oPanel = this.getView().byId("idTabProfExp2");
		oPanel.removeAllContent();
		this._showFormFragment("TabProfExp1", "Display");

	},
	SegmRightBtnPress: function () {
		var oPanel = this.getView().byId("idTabProfExp1");
		oPanel.removeAllContent();
		this._showFormFragment("TabProfExp2", "Display");
	},

	handleCancelPress: function () {
		//TODO при выборе других закладок убирать кнопки изменения в футе


		 //Restore the data
		 var oModel = this.getView().getModel("comunity");
		 oModel.setData(this._oSaves);


		var oPanel = this.getView().byId("idTabProfExp3");
		oPanel.removeAllContent();
		this._showFormFragment("TabProfExp2", "Display");
		this.getView().byId("edit").setVisible(true);
		this.getView().byId("save").setVisible(false);
		this.getView().byId("cancel").setVisible(false);
	},
	handleSavePress: function () {
		var oPanel = this.getView().byId("idTabProfExp3");
		oPanel.removeAllContent();
		this._showFormFragment("TabProfExp2", "Display");
		this.getView().byId("edit").setVisible(true);
		this.getView().byId("save").setVisible(false);
		this.getView().byId("cancel").setVisible(false);
	},
	handleEditPress: function () {
		this._oSaves = JSON.parse(JSON.stringify(this.getView().getModel("comunity").getData()));
		console.log(666, this._oSaves);
		var oPanel = this.getView().byId("idTabProfExp2");
		oPanel.removeAllContent();
		this._showFormFragment("TabProfExp3", "Display");
		this.getView().byId("edit").setVisible(false);
		this.getView().byId("save").setVisible(true);
		this.getView().byId("cancel").setVisible(true);
	},
	projectValueHelp: function (oController) {
		this.inputId = oController.oSource.sId;
		//TODO упорядочить по id
		// create value help dialog
		if (!this._valueHelpDialog) {
			this._valueHelpDialog = sap.ui.xmlfragment("Fragments.DialogProfExp1", this);
			this.getView().addDependent(this._valueHelpDialog);
		}
		var DataName = '';
		switch (this.inputId) {
			case "ProfExpInput1":
				DataName = "comunity1";
				break;
			case "ProfExpInput2":
				DataName = "comunity2";
				break;
			case "ProfExpInput3":
				DataName = "comunity3";
				break;
			case "ProfExpInput4":
				DataName = "comunity4";
				break;
		}

		this._valueHelpDialog.setModel(this.getView().getModel(DataName));
		// open value help dialog
		this._valueHelpDialog.open();
	},
	_projectValueHelpSearch: function (evt) {
		var sValue = evt.getParameter("value");
		var oFilter = new sap.ui.model.Filter("name", sap.ui.model.FilterOperator.Contains, sValue);
		evt.getSource().getBinding("items").filter([oFilter]);
	},
	_projectValueHelpClose: function (evt) {
		var oSelectedItem = evt.getParameter("selectedItem");
		if (oSelectedItem) {
			var productInput = sap.ui.getCore().byId(this.inputId);
			productInput.setValue(oSelectedItem.getTitle());
		}
		evt.getSource().getBinding("items").filter([]);
	}
});