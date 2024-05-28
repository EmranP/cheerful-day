import iconFrom from '@/assets/img/form/arrow.svg'
import imageFrom from '@/assets/img/form/person-form.jpg'
import Image from 'next/image'
export const LayoutForma = () => {
	return (
		<section className='mt-28'>
			<div className='__container'>
				<div className='flex'>
					<Image
						className='rounded-l-[40px]'
						src={imageFrom}
						width={649}
						height={973}
						alt='image-form'
					/>
					<div className='bg-[#F4F4F4] py-9 pl-20 pr-28 font-stolzl rounded-r-[40px]'>
						<h1 className='title'>Работай у нас</h1>
						<h2 className='text-[#a5a5a5] text-lg mt-3'>
							вакансии в кофейне и офисе
						</h2>
						<form action='#' method='post'>
							<div>
								<input
									className='mt-12 max-w-[400px] rounded-3xl placeholder:font-stolzl placeholder:text-black px-6 py-3 outline-none'
									type='text'
									name='город'
									id='city'
									placeholder='город'
									required
								/>
							</div>
							<div className='flex justify-between items-center mt-12 max-w-[260px] rounded-3xl font-stolzl px-6 py-3 bg-white'>
								<h1>должность</h1>
								<Image
									src={iconFrom}
									width={12}
									height={7.41}
									alt='arrow'
									// onClick={() => {}}
									className='cursor-pointer'
								/>
							</div>
							<div>
								<input
									className='mt-12 max-w-[400px] rounded-3xl placeholder:font-stolzl placeholder:text-black px-6 py-3 outline-none'
									type='text'
									name='name'
									id='userName'
									placeholder='ваше имя'
									required
								/>
							</div>
							<div>
								<input
									className='mt-12 max-w-[400px] rounded-3xl placeholder:font-stolzl placeholder:text-black px-6 py-3 outline-none'
									type='tel'
									name='tel'
									id='userTel'
									placeholder='+7('
									required
								/>
							</div>
							<button
								type='submit'
								className='mt-12 w-full py-4 bg-[#01FF0B] rounded-3xl'
							>
								отправить
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
