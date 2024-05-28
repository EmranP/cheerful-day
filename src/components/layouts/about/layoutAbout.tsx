import mainAbout from '@/assets/img/shop/main.png'
import imageMarket from '@/assets/img/shop/market.svg'
import imageOzon from '@/assets/img/shop/ozon.svg'
import imageQrMarket from '@/assets/img/shop/qr/market-qr.jpg'
import imageQrOzon from '@/assets/img/shop/qr/ozon-qr.jpg'
import imageQrWB from '@/assets/img/shop/qr/wb-qr.jpg'
import imageWB from '@/assets/img/shop/wb.svg'
import Image from 'next/image'
export const LayoutAbout = () => {
	return (
		<section className='mt-36'>
			<div className='__container'>
				<div className='flex gap-12'>
					<Image
						src={mainAbout}
						width={536}
						height={733}
						alt='image-shop'
						className='rounded-tl-[5.5rem] -ml-5 object-cover'
					/>
					<div className='mt-14'>
						<h1 className='title'>Наши маркеты</h1>
						<h2 className=' mt-3 font-stolzl'>заказать кофе или чай</h2>
						<div className='flex space-x-9 mt-9'>
							<div>
								<a href='https://www.ozon.ru/' target='__blank'>
									<Image src={imageOzon} width={104} height={45} alt='ozon' />
								</a>
							</div>
							<div>
								<a href='https://www.wildberries.ru/' target='__blank'>
									<Image src={imageWB} width={174.6} height={45} alt='wb' />
								</a>
							</div>
							<div>
								<a href='https://market.yandex.ru/' target='__blank'>
									<Image
										src={imageMarket}
										width={225.88}
										height={40}
										alt='market'
									/>
								</a>
							</div>
						</div>
						<div className='flex space-x-9 mt-14 items-center'>
							<div>
								<Image src={imageQrWB} width={177} height={178} alt='qr-wb' />
							</div>
							<div>
								<Image
									src={imageQrOzon}
									width={165}
									height={178}
									alt='qr-ozon'
								/>
							</div>
							<div>
								<Image
									src={imageQrMarket}
									width={177}
									height={178}
									alt='qr-market'
								/>
							</div>
						</div>
						<div className='mt-8 font-stolzl font-normal text-base'>
							<h2 className='text-xl'>вкус кофе</h2>
							<p className='py-4'>
								cобственная эспрессо-смесь разработана специально для задач сети
								кофеен «Бодрый день»
							</p>
							<p className='pb-12'>
								В состав смеси входит Бразилия натуральной обработки, получаемая
								напрямую от кооператива Expocasser (победителя национального
								чемпионата Cup of Excellence «18), Колумбия Супремо мытой
								обработки региона Антиокья и угандийская робуста максимально
								допустимого к коммерческому экспорту уровня качества
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
