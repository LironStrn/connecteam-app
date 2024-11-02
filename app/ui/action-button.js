
import Link from 'next/link';
import Image from "next/image";
import { merriweather } from '@/app/ui/fonts';
import { heroLinkStyle } from '@/app/ui/homeStyles';

export default function ActionButton({href, children}) {

    return (
        <Link style={heroLinkStyle} className={`${merriweather.className} block heroLink pt-3 bg-[#FF9900] text-[#FFFFFF] text-[19px] mr-4`} href={href}>{children}</Link>
    )
}