import { FooterBody } from './footerBody'
import { FooterTop } from './footerTop'

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='__container'>
				<FooterTop />
				<FooterBody />
				<div className='mt-7 mb-6 text-white text-xs font-stolzl'>
					<h1>© 2024 Бодрый день</h1>
				</div>
			</div>
		</footer>
	)
}
