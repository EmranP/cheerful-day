import Footer from '@/components/footer/page'
import Header from '@/components/header/page'
import { LayoutAbout } from '@/components/layouts/about/layoutAbout'
import { LayoutAdvantage } from '@/components/layouts/advantage/layoutAdvantage'
import { LayoutBlog } from '@/components/layouts/blog/layoutBlog'
import { LayoutForma } from '@/components/layouts/forma/layoutForma'
import { LayoutMain } from '@/components/layouts/main/layoutMain'
import { LayoutMenu } from '@/components/layouts/menu/layoutMenu'
import { LayoutPartner } from '@/components/layouts/partner/layoutPartner'
export default function Home() {
	return (
		<div className='wrapper'>
			<Header />
			<main className='flex-auto'>
				<LayoutMain />
				<LayoutMenu />
				<LayoutAdvantage />
				<LayoutAbout />
				<LayoutBlog />
				<LayoutPartner />
				<LayoutForma />
			</main>
			<Footer />
		</div>
	)
}
