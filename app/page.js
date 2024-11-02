import Image from "next/image";
import { getHomeContent } from '@/app/lib/data';
import MainHeader from '@/app/ui/main-header';
import RepuSection from '@/app/ui/repu-section';
import SitSection from '@/app/ui/sit-section';
import DoloSection from '@/app/ui/dolo-section';
import PraSection from '@/app/ui/pra-section';
import FormSection from '@/app/ui/form-section';
import ActionButton from '@/app/ui/action-button';
import Link from 'next/link';
import { merriweather, inter } from '@/app/ui/fonts';
import { heroImgstyling, logoStyle, icon1Style, subtitleStyle, paragraphStyle, heroLinkStyle, blur, linksContainerStyle, navArrowLinkStyle, navArrowStyle } from '@/app/ui/homeStyles';

export default async function Home() {
  const homeContent = await getHomeContent();

  return (
    <div className="flex min-h-screen flex-col">
      <header>
        <div style={heroImgstyling}>
          <Image
            className=""
            src="/logo.svg"
            alt="Next.js logo"
            width={320}
            height={60}
            style={logoStyle}
            priority
          />
          <h2 style={subtitleStyle} className={`${merriweather.className}`}>{homeContent.content.hero.title}</h2>
          <p style={paragraphStyle} className={`${inter.className}`}>{homeContent.content.hero.subtitle}</p>
          <div className="flex gap-5" style={linksContainerStyle}>
            <Link style={{ ...heroLinkStyle, ...blur }} className={`${merriweather.className} heroLink flex pt-3 bg-transparent text-[#FF9900] border-2 border-[#FF9900]`} href={homeContent.content.hero.links[0].href}>
              <Image
                className="hero-link-icon"
                src="/icon-1.svg"
                alt="Next.js logo"
                width={16}
                height={16}
                style={icon1Style}
                priority
              />
              <span className="ml-4 hero-link-text">{homeContent.content.hero.links[0].label}</span>
              <span className={`ml-2 btn-arrow ${inter.className}`}>→</span>
            </Link>
            <Link style={{ ...heroLinkStyle, ...blur }} className={`${merriweather.className} heroLink flex pt-3 bg-transparent text-[#FF9900] border-2 border-[#FF9900]`} href={homeContent.content.hero.links[1].href}>
              <Image
                className="hero-link-icon"
                src="/icon-1.svg"
                alt="Next.js logo"
                width={16}
                height={16}
                style={icon1Style}
                priority
              />
              <span className="ml-4 hero-link-text">{homeContent.content.hero.links[1].label}</span>
              <span className={`ml-2 btn-arrow ${inter.className}`}>→</span>
            </Link>

          </div>

          <Link href="#" style={{ ...navArrowLinkStyle, ...blur }}>
            <Image
              className="dark:invert"
              src="/arrow-select.svg"
              alt="Next.js logo"
              width={16}
              height={16}
              style={navArrowStyle}
              priority
            />
          </Link>
        </div>
      </header>
      <main className="">
        <MainHeader className='sticky'/>
        <RepuSection />
        <SitSection />
        <DoloSection />
        <PraSection />
        <FormSection />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
