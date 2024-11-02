import Link from 'next/link';
import Image from "next/image";
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
      <div className='flex items-center gap-8 justify-center mt-8 overflow-x-scroll md:overflow-x-clip'>
        <div className='flex'>
            <Image
                className="mr-1"
                src="/icon-3.svg"
                alt="Next.js logo"
                width={16}
                height={16}
                style={repStyle}
                priority
            />
            
            <Link href={'#section1'} style={linkTextStyle} className={`text-[#7A00DA] ${merriweather.className}`}>Repudiandae</Link>
        </div>
        <div className='flex'>
            <Image
                className="mr-1"
                src="/icon-5.svg"
                alt="Next.js logo"
                width={16}
                height={16}
                style={sitStyle}
                priority
            />
            <Link href={'#section2'} style={linkTextStyle} className={`text-[#00CDDA] ${merriweather.className}`}>Sit et enim</Link>
        </div>
        <div className='flex'>
            <Image
                className="mr-1"
                src="/icon-4.svg"
                alt="Next.js logo"
                width={16}
                height={16}
                style={doloreStyle}
                priority
            />
            <Link href={'#section3'} style={linkTextStyle} className={`text-[#0098DA] ${merriweather.className} `}>Dolore ipsum</Link>
        </div>
        <div className='flex'>
            <Image
                className="mr-1"
                src="/icon-3.svg"
                alt="Next.js logo"
                width={16}
                height={16}
                style={praStyle}
                priority
            />
            <Link href={'#section4'} style={linkTextStyle} className={`text-[#DA0069] ${merriweather.className} font-bold`}>Praesentium aspernatur</Link>
        </div>
      </div>
    );
  }