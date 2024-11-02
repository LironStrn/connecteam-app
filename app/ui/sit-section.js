import Link from 'next/link';
import Image from "next/image";
import { merriweather, inter } from '@/app/ui/fonts';
import { getSitContent } from '@/app/lib/data';

export default async function SitSection() {

    const content = await getSitContent();

    const iconStyle = {
        filter: 'invert(57%) sepia(10%) saturate(7498%) hue-rotate(143deg) brightness(102%) contrast(106%)',
    };

    const iconContStyle = {
        backgroundColor: '#F8EFFF',
        maxWidth: 'fit-content',
        padding: '12px',
        borderRadius: '50px',
        width: '60px',
        height: '60px',
    };

    const imageStyling = {
        position: 'relative',
        bottom: '70px',
        height: '100%',
        borderRadius: '50%'
    }

    const imgIconContStyle = {
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        maxWidth: 'fit-content',
        padding: '20px',
        borderRadius: '50%',
        borderWidth: '4px',
        borderColor: 'white',
        minWidth: '108px',
        height: '108px',
        float: 'right',
        bottom: '190px'
    };

    return (
        <>
            <div className='flex justify-center h-[440px]' id="section2">
                
                <div className='w-[400px] h-[400px] mr-8'>
                    <Image
                        className="mr-1"
                        src='https://connecteam.com/static/frontend-home-task/jpg/sit-et-enim-large.jpg'
                        alt="Next.js logo"
                        width={440}
                        height={440}
                        style={imageStyling}
                        priority
                    />
                    <div style={imgIconContStyle}>
                        <Image
                            className=""
                            src={`/${content.icon}.svg`}
                            alt="Next.js logo"
                            width={64}
                            height={64}
                            style={iconStyle}
                            priority
                        />
                    </div>
                </div>
                <div className='card-text w-[700px]'>  
                    <div className='flex'>
                        <div style={iconContStyle}>
                            <Image
                                className="mr-1"
                                src={`/${content.icon}.svg`}
                                alt="Next.js logo"
                                width={36}
                                height={36}
                                style={iconStyle}
                                priority
                            />
                        </div>
                        <div>
                            <span className={`${inter.className} text-[12px] uppercase`}>{content.label}</span>
                            <h1 className={`${merriweather.className} text-[32px] text-[#00CDDA] leading-[28px]`}>{content.title}</h1>
                        </div>
                    </div>
                    <div className={inter.className} dangerouslySetInnerHTML={{__html: content.description}}></div>
                    <div>
                        <span className={`${merriweather.className} text-[19px] text-[#00CDDA]`}>Omnis voluptas rerum fuga maiores rem in <span className={`text-[#00CDDA] ml-2 btn-arrow-visible ${inter.className}`}>→</span></span>
                    </div>
                </div>
            </div>
        </>
    )


}