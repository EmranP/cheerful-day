export interface IFooterList {
	id: number
	list: {
		title: string
		titleOne: string
		titleTwo: string
	}
}

export interface IFooterListContact {
	id: number
	list: { id: number; title: string; titleEmail: string }
}

export const footerList: IFooterList[] = [
	{
		id: 1,
		list: {
			title: 'Меню + кбжу',
			titleOne: 'Адреса Кофеен',
			titleTwo: 'Маркеты',
		},
	},
	{
		id: 2,
		list: {
			title: 'франшиза',
			titleOne: 'Вакансии',
			titleTwo: 'Контакты',
		},
	},
]

export const footerListContact: IFooterListContact[] = [
	{
		id: 1,
		list: {
			id: 1,
			title: 'Поставщикам',
			titleEmail: 'sales@bodryi-den.ru',
		},
	},
	{
		id: 2,
		list: {
			id: 2,
			title: 'Вакансии',
			titleEmail: 'hr@bodryi-den.ru',
		},
	},
	{
		id: 3,
		list: {
			id: 3,
			title: 'Предложить локацию',
			titleEmail: 'info@bodryi-den.ru',
		},
	},
]

export const footerSecondContactList: IFooterListContact[] = [
	{
		id: 1,
		list: {
			id: 1,
			title: 'Поддержка партнёров',
			titleEmail: 'support@bodryi-den.ru',
		},
	},
	{
		id: 2,
		list: {
			id: 2,
			title: 'Офис	+7 383 375-00-24',
			titleEmail: 'info@bodryi-den.ru',
		},
	},
]
