import Link from 'next/link';
import { merriweather, inter } from '@/app/ui/fonts';

export default function MainHeader({ children, className, ...rest }) {

    const repStyle = {
        filter: 'invert(11%) sepia(99%) saturate(7402%) hue-rotate(278deg) brightness(84%) contrast(115%)',
    };

    const sitStyle = {
        filter: 'invert(57%) sepia(10%) saturate(7498%) hue-rotate(143deg) brightness(102%) contrast(106%)',
    };

    const doloreStyle = {
        filter: 'invert(47%) sepia(83%) saturate(3459%) hue-rotate(171deg) brightness(95%) contrast(101%)',
    }

    const praStyle = {
        filter: 'invert(11%) sepia(100%) saturate(5639%) hue-rotate(324deg) brightness(89%) contrast(103%)'
    }

    const linkTextStyle = {
        fontSize: '19px',
        fontWeight: '800',
    }

    return (
        <div className='flex items-center gap-8 md:justify-center md:mt-8 overflow-x-scroll md:overflow-x-clip h-[50px] sticky top-0 bg-white text-white p-1 md:p-4 z-50'>
                <div className='flex'>
                    <img
                        className="mr-1"
                        src="/icon-3.svg"
                        alt="Next.js logo"
                        width={16}
                        height={16}
                        style={repStyle}
                    />

                    <Link href={'#section1'} style={linkTextStyle} className={`text-[#7A00DA] ${merriweather.className} whitespace-nowrap`}>Repudiandae</Link>
                </div>
                <div className='flex'>
                    <img
                        className="mr-1"
                        src="/icon-5.svg"
                        alt="Next.js logo"
                        width={16}
                        height={16}
                        style={sitStyle}
                    />
                    <Link href={'#section2'} style={linkTextStyle} className={`text-[#00CDDA] ${merriweather.className} whitespace-nowrap`}>Sit et enim</Link>
                </div>
                <div className='flex'>
                    <img
                        className="mr-1"
                        src="/icon-4.svg"
                        alt="Next.js logo"
                        width={16}
                        height={16}
                        style={doloreStyle}
                    />
                    <Link href={'#section3'} style={linkTextStyle} className={`text-[#0098DA] ${merriweather.className} whitespace-nowrap`}>Dolore ipsum</Link>
                </div>
                <div className='flex'>
                    <img
                        className="mr-1"
                        src="/icon-3.svg"
                        alt="Next.js logo"
                        width={16}
                        height={16}
                        style={praStyle}
                    />
                    <Link href={'#section4'} style={linkTextStyle} className={`text-[#DA0069] ${merriweather.className} font-bold whitespace-nowrap`}>Praesentium aspernatur</Link>
                </div>
            </div>
        
    );
}