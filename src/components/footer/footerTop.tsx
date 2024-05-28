export const FooterTop = () => {
	return (
		<div className='flex justify-between items-center py-10'>
			<div>
				<h1 className='title text-white'>
					Остались вопросы или хотите <br /> открыть кофейню по франшизе?
				</h1>
				<h2 className=' mt-3 font-stolzl font-normal text-xl text-white opacity-55'>
					Оставьте свой номер и мы с вами свяжемся
				</h2>
			</div>
			<div className='space-y-3'>
				<div>
					<input
						className='max-w-[400px] text-white outline outline-2 bg-transparent rounded-3xl placeholder:font-stolzl placeholder:text-white placeholder:font-light px-6 py-3 outline-white'
						type='text'
						name='name'
						id='userName'
						placeholder='ваше имя'
						required
					/>
				</div>
				<div>
					<input
						className='max-w-[400px] text-white outline outline-2 bg-transparent rounded-3xl placeholder:font-stolzl placeholder:text-white placeholder:font-light px-6 py-3 outline-white'
						type='tel'
						name='tel'
						id='userTel'
						placeholder='+7('
						required
					/>
				</div>
			</div>
		</div>
	)
}
