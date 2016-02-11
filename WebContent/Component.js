//jQuery.sap.declare('app.Component');
sap.ui.define('sap.ui.app.Component', ['sap/ui/core/UIComponent'], function(UIComponent) {
	"use strict";

	return UIComponent.extend('sap.ui.app.Component', {
		metadata: {
			includes : ["css/style.css"],
			name: 'Employee profile',
			dependencies: {
				libs: ['sap.m'],
				components: []
			},
			rootView: 'sap.ui.app.view.main'
		},
		init: function(){
			
			var mConfig = this.getMetadata().getConfig();
			var rootPath = jQuery.sap.getModulePath('sap.ui.app');
			jQuery.sap.registerModulePath('Fragments', [rootPath, 'fragments'].join('/'));
			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl: [rootPath, "i18n/i18n.properties"].join("/")
			});
			this.setModel(i18nModel, "i18n");
			sap.ui.core.UIComponent.prototype.init.apply( this, arguments);

			/* test */
			var testModel = new sap.ui.model.json.JSONModel({
				img: "test/user.jpg",
				username: "Смирнов Сергей Александрович",
				pernr: "01000059",
				subt: "Старший менеджер",
				bdate: "21 марта 1981",
				grade: "18",
				subdivision: "Отдел разработки приложений на платформе SAP",
				manager: "Преображенский Евгений Петрович",
				event: "Событие №1: 01.05.2016 - 20.06.2016",
				userEvents: [
					{
						name: "Событие №1",
						date: "01.05.2016 - 20.06.2016",
						desc: "Описание события №1"
					},{
						name: "Событие №2",
						date: "21.06.2016 - 01.07.2016",
						desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto explicabo eligendi sequi rerum voluptatum non dicta fuga cupiditate deserunt aspernatur odio molestiae inventore enim nostrum rem dolorum nemo consectetur?"
					}
				],
				warningMsg: "Название ближайшего события: 16 января - 28 февраля 2016 г."
			});
			this.setModel(testModel, "model");

			var comunity1 = new sap.ui.model.json.JSONModel({
				group: [
						{
							name: 'Сообщество "Угольные шахты"',
							id: "1"
						},{
							name: 'Сообщество "Ремонты"',
							id: "3"
						},{
							name: "Управление эффективностью, Ведение структуры грейдов",
							id: "2"
						}
					   ]
				});
			var comunity2 = new sap.ui.model.json.JSONModel({
				group: [
					{
						name: 'Россия',
						id: "1"
					},{
						name: 'Франция',
						id: "3"
					},{
						name: "Замбия",
						id: "2"
					}
				]
			});
			var comunity3 = new sap.ui.model.json.JSONModel({
				group: [
					{
						name: 'Москва',
						id: "1"
					},{
						name: 'Париж',
						id: "3"
					},{
						name: "Череповец",
						id: "2"
					}
				]
			});
			var comunity4 = new sap.ui.model.json.JSONModel({
				group: [
					{
						name: 'Лидер экспертного сообщества',
						id: "1"
					},{
						name: 'Лидер экспертной группы',
						id: "3"
					},{
						name: "Архитектор проекта",
						id: "2"
					}
				]
			});

			var comunity = new sap.ui.model.json.JSONModel({
				group: [
					{
						description: 'Описание проекта - дополнительная информация',
						name: 'Сообщество "Угольные шахты"',
						country: "Россия",
						city: "Москва",
						begda: "12.02.11",
						endda: "17.03.15",
						person: "Пахоменко Валерий Иванович",
						role: "Лидер экспертного сообщества",
					    result: "Текст",
						subordinates: 8,
						keyproject: true
					},{
						description: 'Описание проекта - в виде текстового прмечания',
						name: 'Сообщество "Ремонты"',
						country: "Франция",
						city: "Париж",
						begda: "11.09.11",
						endda: "12.09.12",
						person: "Пахоменко Валерий Иванович",
						role: "Архитектор проекта",
						result: "Текст",
						subordinates: 3,
						keyproject: false
					}
				]
			});



			this.setModel(comunity, "comunity");
			this.setModel(comunity1, "comunity1");
			this.setModel(comunity2, "comunity2");
			this.setModel(comunity3, "comunity3");
			this.setModel(comunity4, "comunity4");

			/* /.test */
		}
	})
})