import arrowRight from '@/assets/icon/arrow02.svg'
import Image from 'next/image'
import styleLayout from '../layout.module.scss'
export const LayoutPartner = () => {
	return (
		<section className={styleLayout.section__partner}>
			<div className='__container'>
				<div className='pt-44 pb-72 font-stolzl font-normal text-white space-y-8'>
					<h1 className=' text-4xl uppercase'>в поисках новых партнёров</h1>
					<div className='space-y-5 text-lg '>
						<p>
							Входим в топ-3 кофеен по количеству кофеен в России по версии
							журнала Foodservice
						</p>
						<p>Одна из самых прибыльных франшиз по мнению Forbes</p>
						<p>Каждую неделю открываем 1 новую кофейню вместе с партнёрами</p>
					</div>
					<button className='flex items-center justify-between py-5 px-8 rounded-3xl bg-[#01FF0B] text-colorBlackBD text-base '>
						открыть кофейню
						<div className='cursor-pointer pl-4'>
							<Image
								width={15}
								height={14}
								src={arrowRight}
								alt='arrow-right__icon'
							/>
						</div>
					</button>
				</div>
			</div>
		</section>
	)
}
