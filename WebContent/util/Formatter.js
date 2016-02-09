sap.ui.define([],
	function () {
		"use strict";

		var Formatter = {
			statusIcon: function(risk,potential){
				var color;
				switch (potential){
					case 'обычный риск ухода':
						switch (risk){
							case 'Высокий потенциал':
								color = 'green';
								break;
							case 'На своём месте':
								color = 'whitesmoke'
								break;
							case 'Проблемный':
								color = 'grey'
								break;
						}
						break;
					case 'высокий риск ухода':
						switch (risk){
							case 'Высокий потенциал':
								color = 'red';
								break;
							case 'На своём месте':
								color = 'yellow'
								break;
							case 'Проблемный':
								color = 'grey'
								break;
						}
						break;
				}
				return color
			},
			successionHeaderFactory: function (oGroup){
				var oTitle;
				switch (oGroup.key){
					case 'me': 
						oTitle = '{i18n>PersTabsSuccessionGroupMe}'
						break;
					case 'my':
						oTitle = '{i18n>PersTabsSuccessionGroupMy}';
						break
				}
				return new sap.m.GroupHeaderListItem( {
					title: oTitle,
					upperCase: false,
					//count: '123'
				} )
			}
		};

		return Formatter;
},true);