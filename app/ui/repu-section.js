import Link from 'next/link';
import Image from "next/image";
import { merriweather, inter } from '@/app/ui/fonts';
import { getRepuContent } from '@/app/lib/data';

export default async function RepuSection() {

    const content = await getRepuContent();

    const iconStyle = {
        filter: 'invert(18%) sepia(60%) saturate(5571%) hue-rotate(271deg) brightness(77%) contrast(132%)',
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
            <div className='flex justify-center mt-[150px] h-[400px]' id="section1">
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
                            <h1 className={`${merriweather.className} text-[32px] text-[#7A00DA] leading-[28px]`}>{content.title}</h1>
                        </div>
                    </div>
                    <div className={inter.className} dangerouslySetInnerHTML={{__html: content.description}}></div>
                    <div>
                        <span className={`${merriweather.className} text-[19px] text-[#7A00DA]`}>Molestiae architecto odit quas dicta nobis <span className={`text-[#7A00DA] ml-2 btn-arrow-visible ${inter.className}`}>→</span></span>
                    </div>
                </div>
                <div className='w-[440px] h-[440px]'>
                    <Image
                        className="mr-1"
                        src='https://connecteam.com/static/frontend-home-task/jpg/repudiandae-large.jpg'
                        alt="Next.js logo"
                        width={440}
                        height={440}
                        style={imageStyling}
                        priority
                    />
                    <div style={imgIconContStyle}>
                        <Image
                            className="mr-1"
                            src={`/${content.icon}.svg`}
                            alt="Next.js logo"
                            width={64}
                            height={64}
                            style={iconStyle}
                            priority
                        />
                    </div>
                </div>
            </div>
        </>
    )


}