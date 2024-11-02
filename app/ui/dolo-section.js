import Image from "next/image";
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import { merriweather, inter } from '@/app/ui/fonts';
import { getDoloContent } from '@/app/lib/data';
import { sectionLinkStyle, heroLinkStyle, blur, icon1Style } from '@/app/ui/homeStyles';

export default async function DoloSection() {
    const content = await getDoloContent();

    const backGround = {
        backgroundColor: '#004C6C',
        //position: 'relative'
    }

    const imgContStyle = {
        width: '50%',
        height: '50%',
        maxHeight: '0',
        float: 'right'
    }
    const imgStyle = {
        //width: '100%',
        //height: '100%',
        opacity: '6%',
        position: 'relative',
        borderRadius: '1px 0 3px 4px'
    }

    const iconContStyle = {
        backgroundColor: '#0098DA',
        maxWidth: 'fit-content',
        padding: '24px',
        borderRadius: '50%',
        height: '120px',
        minWidth: '120px'
    };

    const mainIconStyle = {
        filter: 'invert(100%) sepia(43%) saturate(2%) hue-rotate(273deg) brightness(113%) contrast(101%)',
    };

    const btnIconStyle = {
        filter: 'invert(46%) sepia(77%) saturate(3255%) hue-rotate(170deg) brightness(95%) contrast(102%)',
        position: 'relative',
        top: '-15%',
        left: '5%',
    }

    const sectionLinkStyle = {
        width: 'fit-content',
        height: '55px',
        borderRadius: '32px',
        textAlign: 'center',
        fontSize: '19px',
        paddingRight: '15px'
    };

    const dividerStyle = {
        background: '#3d88ad',
        filter: 'blur(1px)'
    }


    return (
        <>
            <div className="text-center py-10" style={backGround} id="section3">
                <div style={imgContStyle}>
                    <Image
                        className="ml-1 mt-1"
                        src={`https://connecteam.com/static/frontend-home-task/jpg/dolore-ipsum-large.jpg`}
                        alt="Next.js logo"
                        width={1000}
                        height={1000}
                        style={imgStyle}
                        priority
                    />
                </div>

                <div className="flex justify-center">
                    <div style={iconContStyle}>
                        <Image
                            className="ml-1 mt-1"
                            src={`/${content.icon}.svg`}
                            alt="Next.js logo"
                            width={64}
                            height={64}
                            style={mainIconStyle}
                            priority
                        />
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="w-[1120px]">
                        <span className={`${inter.className} text-[12px] text-[#9CB8C3] uppercase`}>{content.label}</span>
                        <h1 className={`${merriweather.className} text-[42px] text-[#0098DA]`}>{content.title}</h1>
                        <div className={`${inter.className} text-white`} dangerouslySetInnerHTML={{ __html: content.description }}></div>
                    </div>
                </div>
                <div className="flex justify-center my-5">
                    <div className="w-[1120px]">
                        <Divider style={dividerStyle} variant="fullWidth"></Divider>
                    </div>
                </div>
                <div className="flex justify-center gap-6 mt-5">

                    <Link style={{ ...sectionLinkStyle, ...blur }} className={`section-link ${merriweather.className} flex pt-3 bg-transparent text-[#0098DA] border-2 border-[#0098DA]`} href={'#'}>
                        <Image
                            className="btn-icon"
                            src="/icon-1.svg"
                            alt="Next.js logo"
                            width={16}
                            height={16}
                            style={btnIconStyle}
                            priority
                        />
                        <span className="ml-6 btn-text">Voluptatem repudiandae et</span>
                        <span className={`ml-2 btn-arrow ${inter.className}`}>→</span>
                    </Link>
                    <Link style={{ ...sectionLinkStyle, ...blur }} className={`section-link ${merriweather.className} flex pt-3 bg-transparent text-[#0098DA] border-2 border-[#0098DA]`} href={'#'}>
                        <Image
                            className="btn-icon"
                            src="/icon-6.svg"
                            alt="Next.js logo"
                            width={16}
                            height={16}
                            style={btnIconStyle}
                            priority
                        />
                        <span className="ml-4 btn-text">Et aperiam et est</span>
                        <span className={`ml-2 btn-arrow ${inter.className}`}>→</span>
                    </Link>
                    <Link style={{ ...sectionLinkStyle, ...blur }} className={`section-link ${merriweather.className} flex pt-3 bg-transparent text-[#0098DA] border-2 border-[#0098DA]`} href={'#'}>
                        <Image
                            className="btn-icon"
                            src="/icon-7.svg"
                            alt="Next.js logo"
                            width={16}
                            height={16}
                            style={btnIconStyle}
                            priority
                        />
                        <span className="ml-4 btn-text">Minima aut omnis</span>
                        <span className={`ml-2 btn-arrow ${inter.className}`}>→</span>
                    </Link>
                </div>

            </div>
        </>
    )
}