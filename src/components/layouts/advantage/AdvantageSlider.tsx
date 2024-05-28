'use client'

import arrowLeft from '@/assets/icon/arrow01.svg'
import arrowRight from '@/assets/icon/arrow02.svg'
import { advantageSlider } from '@/utils/SwiperSliderData'
import Image from 'next/image'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

export const AdvantageSlider = () => {
	const swiperRef = useRef()
	return (
		<>
			<div className='flex justify-between items-center mt-6'>
				<button className='py-3 px-6 font-stolzl font-normal text-base rounded-2xl hover:bg-colorGreen hover:opacity-75  transition-colors '>
					адреса кофеен
				</button>
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
			</div>
			<Swiper
				spaceBetween={30}
				speed={500}
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
				breakpoints={{
					1024: {
						slidesPerView: 4,
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
				{advantageSlider.map(item => (
					<SwiperSlide key={item.id}>
						<Image
							className='rounded-2xl object-cover'
							src={item.image}
							width={312}
							height={312}
							alt='card'
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
