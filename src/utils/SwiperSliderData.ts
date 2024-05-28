import blogCardOne from '@/assets/img/blog/01.png'
import blogCardTwo from '@/assets/img/blog/02.png'
import cardOne from '@/assets/img/card/01.png'
import cardTwo from '@/assets/img/card/02.png'
import cardThree from '@/assets/img/card/03.png'
import cardFour from '@/assets/img/card/04.png'
import { StaticImageData } from 'next/image'

export interface ISliderMenu {
	id: number
	title: string
	subtitle: string
	btn: string
}

export interface ISliderAdvantages {
	id: number
	image: StaticImageData
}

export interface ISliderBlog {
	id: number
	image: StaticImageData
	title: string | boolean
	text: string
	showText: string
}

export const menuSlider: ISliderMenu[] = [
	{
		id: 1,
		title: 'Шоколадный айс-латте с сырной пенкой',
		subtitle: 'ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02',
		btn: 'состав',
	},
	{
		id: 2,
		title: 'Латте',
		subtitle: 'ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02',
		btn: 'состав',
	},
	{
		id: 3,
		title: 'Шоколадный айс-латте с сырной пенкой',
		subtitle: 'ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02',
		btn: 'состав',
	},
	{
		id: 4,
		title: 'Шоколадный айс-латте с сырной пенкой',
		subtitle: 'ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02',
		btn: 'состав',
	},
	{
		id: 5,
		title: 'Латте',
		subtitle: 'ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02',
		btn: 'состав',
	},
	{
		id: 6,
		title: 'Латте',
		subtitle: 'ккал: 150.99, белки: 7.43, жиры: 8.18, углеводы: 12.02',
		btn: 'состав',
	},
]

export const advantageSlider: ISliderAdvantages[] = [
	{
		id: 1,
		image: cardOne,
	},
	{
		id: 2,
		image: cardTwo,
	},
	{
		id: 3,
		image: cardThree,
	},
	{
		id: 4,
		image: cardFour,
	},
	{
		id: 5,
		image: cardOne,
	},
	{
		id: 6,
		image: cardTwo,
	},
]

export const blogSlider: ISliderBlog[] = [
	{
		id: 1,
		image: blogCardOne,
		title: `Встречайте новую бодрую
		кофейню в Москве!`,
		text: `
		Это новая точка с двумя этажами и освежающим и стильным интерьером. В меню — вечная бодрящая классика, крутые весенние спешелы и очень вкусные десерты. Приходите в гости на Новоданиловскую набережную 10А и попробуйте сами
		`,
		showText: '',
	},
	{
		id: 2,
		image: blogCardTwo,
		title: false,
		text: `Если вы впервые открываете кофейню и ищете бариста, то можете чувствовать себя неуверенно: как выбрать сотрудника? Чему его научить? Как описать вакансию? Мы отлично понимаем вас, поэтому поделимся опытом и расскажем, как подбираем бариста для Бодрых кофеен.`,
		showText: 'показать полностью...',
	},
	{
		id: 3,
		image: blogCardOne,
		title: false,
		text: `
		Это новая точка с двумя этажами и освежающим и стильным интерьером. В меню — вечная бодрящая классика, крутые весенние спешелы и очень вкусные десерты. Приходите в гости на Новоданиловскую набережную 10А и попробуйте сами
		`,
		showText: '',
	},
]
