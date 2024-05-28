import mainImg from '@/assets/img/main.png'
import Image from 'next/image'
import styleMain from '../layout.module.scss'
export const LayoutMain = () => {
	return (
		<section className='mt-20'>
			<div className='__container'>
				<div className='flex items-center'>
					<div className='text-start'>
						<div>
							<h1 className='title'>
								Мы международная <br /> сеть кофеен
							</h1>
							<p className='py-5 max-w-[450px] text-xl text-[##1d1e1b] font-normal'>
								Любим наше дело и горды тем, что ежедневно наш кофе выбирают
								десятки тысяч гостей
							</p>
						</div>
						<div className={styleMain.main__subtitle}>
							<div>
								<span>35</span>
								домашних кофеен
							</div>
							<div className='px-5 sm:px-0 py-4'>
								<span>150</span>
								партнёрских кофеен
							</div>
							<div>
								<span>1</span>
								фабрика  <br /> по производству  <br /> сладких калорий
							</div>
							<div>
								<span>300 000</span>
								проданных напитков в месяц
							</div>
						</div>
					</div>
					<div>
						<Image width={377} height={407} src={mainImg} alt='main-image' />
					</div>
				</div>
			</div>
		</section>
	)
}
