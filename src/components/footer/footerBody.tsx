import arrowRight from '@/assets/icon/arrow02.svg'
import {
	footerList,
	footerListContact,
	footerSecondContactList,
} from '@/utils/listInfo'
import Image from 'next/image'

function ContactFooter() {
	return (
		<div className='mt-5 text-end'>
			<div className='text-2xl'>
				<h1>Контакты</h1>
			</div>
			<div className='flex justify-end text-xs space-x-5'>
				<div className='grid gap-y-2'>
					{footerListContact.map(listItem => (
						<ul key={listItem.id}>
							<li key={listItem.list.id}>{listItem.list.title}</li>
							<li key={listItem.list.id}>{listItem.list.titleEmail}</li>
						</ul>
					))}
				</div>
				<div className='flex flex-col justify-between'>
					{footerSecondContactList.map(listItem => (
						<ul key={listItem.id}>
							<li key={listItem.list.id}>{listItem.list.title}</li>
							<li key={listItem.list.id}>{listItem.list.titleEmail}</li>
						</ul>
					))}
				</div>
			</div>
		</div>
	)
}

function AddressFooter() {
	return (
		<div className='mt-5 flex justify-between items-center'>
			<div className='flex space-x-5'>
				<div className='bg-white py-[13px] px-[11px] text-center rounded-full'>
					<Image
						src='/tg.svg'
						width={20}
						height={20}
						alt='telegram'
						className='cursor-pointer '
					/>
				</div>
				<div className='bg-white py-[13px] px-[11px] text-center rounded-full'>
					<Image
						src='/wa.svg'
						width={20}
						height={20}
						alt='whatsapp'
						className='cursor-pointer'
					/>
				</div>
			</div>
			<div className='text-end text-xs'>
				<ul>
					<li>Адрес</li>
					<li>630049, г. Новосибирск, </li>
					<li>Красный проспект 200, 12 этаж</li>
				</ul>
			</div>
		</div>
	)
}

export const FooterBody = () => {
	return (
		<div className='my-8 bg-[rgba(44,43,42,0.63)] rounded-3xl py-8 px-10 text-white font-stolzl font-normal'>
			<div className='flex justify-between items-center'>
				<div className='flex'>
					<div className='flex-auto'>
						<h1 className='flex'>
							б
							<Image src='/logo.svg' width={20} height={20} alt='Image logo' />
							дрый
						</h1>
						<h2 className='text-start'>день</h2>
					</div>
					<div className='flex text-xs font-normal ml-24 space-x-10'>
						{footerList.map(itemList => (
							<ul className='grid gap-y-2' key={itemList.id}>
								<li>{itemList.list.title}</li>
								<li>{itemList.list.titleOne}</li>
								<li>{itemList.list.titleTwo}</li>
							</ul>
						))}
					</div>
				</div>
				<button className='flex items-center justify-between py-4 px-10 rounded-3xl bg-[#01FF0B] text-colorBlackBD text-base '>
					франшиза
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
			<ContactFooter />
			<AddressFooter />
		</div>
	)
}
