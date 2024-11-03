import Image from "next/image";
import Link from 'next/link';
import { getHomeContent } from '@/app/lib/data';
import { merriweather, inter } from '@/app/ui/fonts';
import { icon1Style, heroLinkStyle, blur, navArrowLinkStyle, navArrowStyle } from '@/app/ui/homeStyles';



export default function Hero({ heroContent }) {

    const heroImgstyling = {
        backgroundImage: `url(https://connecteam.com/static/frontend-home-task/jpg/home-large.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    const logoStyle = {
        textAlign: 'center',
        color: 'white',
        filter: 'invert(100%) sepia(1%) saturate(2%) hue-rotate(328deg) brightness(102%) contrast(102%)',
        zIndex: 1
    };

    const subtitleStyle = {
        color: 'white',
        //lineHeight: '67.84px'
    };

    const paragraphStyle = {
        color: 'white',
        fontSize: '19px',
        lineHeight: '22.99px'
    };

    const heroLinkStyle = {
        height: '55px',
        borderRadius: '32px',
        textAlign: 'center',
        fontSize: '19px',
    };

    return (
        <div className="flex justify-center md:h-[920px] bg-right-top md:bg-center h-[780px] md:h-[920px]" style={heroImgstyling} >

            <div className="flex flex-col gap-6 md:-translate-x-[50%] md:translate-y-[13%] px-8 md:p-1 mt-10 md:mt-1">
                <img
                    className="mt-1 md:mt-0"
                    src="/logo.svg"
                    alt="Next.js logo"
                    width={320}
                    height={60}
                    style={logoStyle}
                />
                <h2 style={subtitleStyle} className={`${merriweather.className} md:w-[554px] text-[42px] md:text-[64px] leading-[44px] md:leading-[67.84px] my-5 md:my-0`}>{heroContent.title}</h2>
                <p style={paragraphStyle} className={`${inter.className} md:w-[554px] my-5 md:my-0`}>{heroContent.subtitle}</p>

                <div className="flex flex-col md:flex-row gap-5">
                    <Link style={{ ...heroLinkStyle, ...blur }} className={`${merriweather.className} heroLink flex justify-center md:justify-left pt-3 bg-transparent md:w-[217px] text-[#FF9900] border-2 border-[#FF9900]`} href={heroContent.links[0].href}>
                        <img
                            className="hero-link-icon"
                            src="/icon-1.svg"
                            alt="Next.js logo"
                            width={16}
                            height={16}
                            style={icon1Style}
                        />
                        <span className="ml-4 hero-link-text">{heroContent.links[0].label}</span>
                        <span className={`ml-2 btn-arrow ${inter.className}`}>→</span>
                    </Link>
                    <Link style={{ ...heroLinkStyle, ...blur }} className={`${merriweather.className} heroLink flex justify-center md:justify-left pt-3 bg-transparent md:w-[217px] text-[#FF9900] text-center border-2 border-[#FF9900]`} href={heroContent.links[1].href}>
                        <img
                            className="hero-link-icon"
                            src="/icon-1.svg"
                            alt="Next.js logo"
                            width={16}
                            height={16}
                            style={icon1Style}
                        />
                        <span className="ml-4 hero-link-text">{heroContent.links[1].label}</span>
                        <span className={`ml-2 btn-arrow ${inter.className}`}>→</span>
                    </Link>
                </div>

                <div>
                    <Link href="#" style={{ ...navArrowLinkStyle, ...blur }} className="left-[44%] md:left-[0%] md:top-[85%]">
                        <img
                            className="arrow-select"
                            src="/arrow-select.svg"
                            alt="Next.js logo"
                            width={16}
                            height={16}
                            style={navArrowStyle}
                        />
                    </Link>
                </div>
            </div>


        </div>
    )
}