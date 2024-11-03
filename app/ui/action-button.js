
import Link from 'next/link';
import Image from "next/image";
import { merriweather } from '@/app/ui/fonts';
//import { heroLinkStyle } from '@/app/ui/homeStyles';

export default function ActionButton({href, children}) {

    const heroLinkStyle = {
        //width: '217px',
        height: '55px',
        borderRadius: '32px',
        textAlign: 'center',
        fontSize: '19px',
    };

    return (
        <Link style={heroLinkStyle} className={`w-[100%] md:w-[217px] ${merriweather.className} block heroLink pt-3 bg-[#FF9900] text-[#FFFFFF] text-[19px] md:mr-4`} href={href}>{children}</Link>
    )
}