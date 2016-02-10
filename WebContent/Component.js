//jQuery.sap.declare('app.Component');
sap.ui.define('sap.ui.app.Component', ['sap/ui/core/UIComponent'], function(UIComponent) {
	"use strict";

	return UIComponent.extend('sap.ui.app.Component', {
		metadata: {
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
			jQuery.sap.registerModulePath('fragments', [rootPath, 'fragments'].join('/'));
			jQuery.sap.registerModulePath('util', [rootPath, 'util'].join('/'));
			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl: [rootPath, "i18n/i18n.properties"].join("/")
			})
			this.setModel(i18nModel, "i18n");
			

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
				warningMsg: "Название ближайшего события: 16 января - 28 февраля 2016 г.",
				status: {
					risk: "Высокий потенциал",
					potential: "высокий риск ухода"
				},
				position: "Ключевая позиция",
				language: "Английский Язык - выше среднего",
				competit: "Результатовность - уровень",
				topproject: "Значимый проект - название проекта, роль в проекте",
				expertpotential: "Да",
				strengths: [
					{id: '1', name: 'Легко адаптируется,быстро достигает высокого уровня результативности.'},
					{id: '2', name: 'Ответственный, и не боится брать на себя большую ответственность.'},
					{id: '3', name: 'Демонстрирует системное мышление.'},
					{id: '4', name: 'Высокий уровень самоорганизации.'},
				],
				growth: [
					{id: '1', name: 'Работа с финансовыми документами.'},
					{id: '2', name: 'Бюджеты и бизнес- планирование.'},
					{id: '3', name: 'Сложно идут вопросы, связанные с принятием непопулярных решений.'},
					{id: '4', name: 'Принятие непопулярных решений.'},
				],
				continuity: [
					{
						group: 'my',
						img: '',
						status: {
							risk: "Высокий потенциал",
							potential: "высокий риск ухода"
						},
						name: 'Полищук Валентина Олеговна',
						position: 'Специалист отдела разработки и обеспечения перспективными идеями',
						subdivision: 'Наименование подразделения, в котором работает сотрудник',
						reserveType: 'Оперативный',
						readiness: '< 1 года',
						rang: 'A',
						managePotential: true
					},
					{
						group: 'my',
						img: '',
						status: {
							risk: "Высокий потенциал",
							potential: "обычный риск ухода"
						},
						name: 'Павлов Дмитрий Леонидович',
						position: 'Специалист отдела разработки и обеспечения перспективными идеями',
						subdivision: 'Наименование подразделения, в котором работает сотрудник',
						reserveType: 'Оперативный',
						readiness: '2 года',
						rang: 'B',
						managePotential: false
					},
					{
						group: 'me',
						img: '',
						status: {
							risk: "Высокий потенциал",
							potential: "обычный риск ухода"
						},
						name: 'Царёв Николай Степанович',
						position: 'Руководитель отдела разработки и обеспечения перспективными идеями',
						subdivision: 'Наименование подразделения, в котором работает сотрудник',
						reserveType: 'Долгосрочный',
						readiness: '3 года',
						rang: 'A',
						managePotential: true
					}
				],
				mobility: {
					status: true,
					p12: {
						type: 'Региональная',
						placesPros:[
							{
								country: 'Россия',
								cities: ['Москва', 'Череповец']
							},
							{
								country: 'Испания',
								cities: ['Рим']
							}
						],
						placesCons:[
							{
								country: 'Россия',
								cities: ['Южно-Сахалинск']
							},
							{
								country: 'Ангола',
								cities: ['Луанда']
							}
						],
						countriesPros: ['Россия', 'Испания'],
						сitiesPros: ['Москва', 'Череповец'],
						countriesCons: ['Россия','Ангола'],
						сitiesCons: ['Южно-Сахалинск','Луанда'],
						date: '01.02.2016',
						comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eius, officiis consequatur reprehenderit aliquam ipsum aspernatur voluptates distinctio consectetur deserunt vitae explicabo in fugiat molestias porro mollitia cum veniam dolor?'
					},
					p25: {
						type: 'Региональная',
						placesPros:[
							{
								country: 'Россия',
								cities: ['Москва', 'Череповец']
							},
							{
								country: 'Испания',
								cities: ['Рим']
							}
						],
						placesCons:[
							{
								country: 'Россия',
								cities: ['Южно-Сахалинск']
							},
							{
								country: 'Ангола',
								cities: ['Луанда']
							}
						],
						countriesPros: ['Россия', 'Испания'],
						сitiesPros: ['Москва', 'Череповец'],
						countriesCons: ['Россия','Ангола'],
						сitiesCons: ['Южно-Сахалинск','Луанда'],
						date: '01.02.2016',
						comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, eius, officiis consequatur reprehenderit aliquam ipsum aspernatur voluptates distinctio consectetur deserunt vitae explicabo in fugiat molestias porro mollitia cum veniam dolor?'
					}
				},
				mobilityTypes:[
					{key:'',value:'Не определено'},
					{key:'',value:'Региональная'}
				]
			})
			this.setModel(testModel, "model")
			var testModelParam = new sap.ui.model.json.JSONModel({
				statusCollection: [
					{statusId:'1',name:'Высокий потенциал - обычный риск ухода'},
					{statusId:'2',name:'Высокий потенциал - высокий риск ухода'},
					{statusId:'3',name:'На своём месте - обычный риск ухода'},
					{statusId:'4',name:'На своём месте - высокий риск ухода'},
					{statusId:'5',name:'Проблемный - обычный риск ухода'},
					{statusId:'6',name:'Проблемный - высокий риск ухода'},
				],
				btnsVisible: {
					Succession: false
				}
				
				
			})
			this.setModel(testModelParam, "modelParam")
			/* /.test */


			sap.ui.core.UIComponent.prototype.init.apply( this, arguments);
		}
	})
})