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
        //position: 'relative',
        bottom: '70px',
        height: '100%',
        //borderRadius: '50%'
    }

    const imgIconContStyle = {
        position: 'relative',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(10px)',
        maxWidth: 'fit-content',
        padding: '20px',
        //borderRadius: '50%',
        borderWidth: '4px',
        borderColor: 'white',
        minWidth: '108px',
        height: '108px',
        //float: 'right',
        //bottom: '25%'
    };

    return (
        <>
            <div className='flex flex-col md:flex-row md:justify-center md:h-[440px] bg-[#ffffff]' id="section2">
                
                <div className='md:w-[400px] h-[400px] md:mr-8'>
                    <img
                        className="mr-1 md:rounded-full"
                        src='https://connecteam.com/static/frontend-home-task/jpg/sit-et-enim-large.jpg'
                        alt="Next.js logo"
                        width={440}
                        height={440}
                        style={imageStyling}
                    />
                    <div style={imgIconContStyle} className='float-right md:float-left rounded-l-[50%] md:rounded-full bottom-[95%] md:bottom-[25%]'>
                        <img
                            className=""
                            src={`/${content.icon}.svg`}
                            alt="image icon"
                            width={64}
                            height={64}
                            style={iconStyle}
                        />
                    </div>
                </div>
                <div className='card-text md:w-[700px]'>  
                    <div className='flex ml-3 mt-3'>
                        <div style={iconContStyle}>
                            <img
                                className="mr-1"
                                src={`/${content.icon}.svg`}
                                alt="Next.js logo"
                                width={36}
                                height={36}
                                style={iconStyle}
                            />
                        </div>
                        <div>
                            <span className={`${inter.className} text-[12px] uppercase text-[#6A6A6A]`}>{content.label}</span>
                            <h1 className={`${merriweather.className} text-[28px] md:text-[32px] text-[#00CDDA] leading-[28px]`}>{content.title}</h1>
                        </div>
                    </div>
                    <div className={`${inter.className} ml-3 mt-3 text-[#6A6A6A]`} dangerouslySetInnerHTML={{__html: content.description}}></div>
                    <div className='ml-3 mt-3'>
                        <span className={`${merriweather.className} text-[19px] text-[#00CDDA]`}>Omnis voluptas rerum fuga maiores rem in <span className={`text-[#00CDDA] ml-2 btn-arrow-visible ${inter.className}`}>→</span></span>
                    </div>
                </div>
            </div>
        </>
    )


}