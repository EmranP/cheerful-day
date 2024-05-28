'use client'
import styleLayout from '../layout.module.scss'
import { MenuSlider } from './MenuSlider'

export const LayoutMenu = () => {
	return (
		<section className='mt-24'>
			<div className='__container'>
				<div className='space-y-2 font-stolzl  font-light text-lg text-colorBlackBD'>
					<h1 className='title'>Меню напитков</h1>
					<h2>ознакомиться с составами и кбжу</h2>
				</div>
				<div className='flex justify-between items-center mt-7'>
					<div className={styleLayout.menu__btn}>
						<button>классика</button>
						<button>сезонное меню</button>
						<button>хиты</button>
						<button>милкшейки</button>
					</div>
				</div>
				<MenuSlider />
			</div>
		</section>
	)
}
