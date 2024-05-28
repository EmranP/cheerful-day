'use client'
import arrowLeft from '@/assets/icon/arrow01.svg'
import arrowRight from '@/assets/icon/arrow02.svg'
import { menuSlider } from '@/utils/SwiperSliderData'
import Image from 'next/image'
import { useRef } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export const MenuSlider = () => {
	const swiperRef = useRef()
	return (
		<>
			<div className='flex justify-end space-x-5'>
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
			<Swiper
				spaceBetween={30}
				speed={500}
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
				breakpoints={{
					1024: {
						slidesPerView: 3,
					},
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
				className='mt-14'
				slidesPerView={4}
			>
				{menuSlider.map(item => (
					<SwiperSlide className='p-5 rounded-2xl ' key={item.id}>
						<div>
							<h3 className='text-lg font-stolzl font-normal text-colorBlackBD'>
								{item.title}
							</h3>
							<p className='text-base font-stolzl font-normal text-[#828282] py-2'>
								{item.subtitle}
							</p>
							<button className='py-3 px-6 font-stolzl font-normal text-base rounded-2xl bg-colorGreen opacity-75'>
								{item.btn}
							</button>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
