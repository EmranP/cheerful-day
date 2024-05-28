'use client'

import arrowLeft from '@/assets/icon/arrow01.svg'
import arrowRight from '@/assets/icon/arrow02.svg'
import { blogSlider } from '@/utils/SwiperSliderData'
import Image from 'next/image'
import { useRef } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export const LayoutBlog = () => {
	const swiperRef = useRef()
	return (
		<section className='mt-28'>
			<div className='__container'>
				<h1 className='title'>Блог</h1>
				<div className='flex justify-between items-center'>
					<div>
						<h2>новости о кофейнях</h2>
					</div>
					<div className='flex space-x-4 items-center'>
						<Image
							width={15}
							height={14}
							src={arrowLeft}
							alt='arrow-left__icon'
							className='cursor-pointer'
							onClick={() => swiperRef.current.slidePrev()}
						/>
						<Image
							width={15}
							height={14}
							src={arrowRight}
							alt='arrow-right__icon'
							className='cursor-pointer'
							onClick={() => swiperRef.current.slideNext()}
						/>
					</div>
				</div>
				<Swiper
					spaceBetween={30}
					speed={500}
					onSwiper={swiper => {
						swiperRef.current = swiper
					}}
					breakpoints={{
						768: {
							slidesPerView: 2,
						},
						425: {
							slidesPerView: 1.5,
						},
						375: {
							slidesPerView: 1.3,
						},
						320: {
							slidesPerView: 1,
						},
					}}
					className='mt-14  rounded-3xl'
					slidesPerView={2}
				>
					{blogSlider.map(item => (
						<SwiperSlide key={item.id}>
							<div className='flex gap-2 px-4 py-5'>
								<Image
									src={item.image}
									width={280}
									height={280}
									alt='image-one'
								/>
								<div className='px-4 font-stolzl font-normal max-h-[318px] text-sm max-w-[500px]'>
									<h1 className='mb-3'>{item.title}</h1>
									<div>{item.text}</div>
									<div className='pt-3 cursor-pointer hover:underline '>
										{item.showText}
									</div>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
