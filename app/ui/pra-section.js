import Link from 'next/link';
import Image from "next/image";
import { merriweather, inter } from '@/app/ui/fonts';
import { getPrasContent } from '@/app/lib/data';

export default async function PraSection() {

    const content = await getPrasContent();

    const iconStyle = {
        filter: 'invert(11%) sepia(100%) saturate(6449%) hue-rotate(325deg) brightness(85%) contrast(101%)',
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
        //bottom: '70px',
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
            <div className='flex flex-col-reverse md:flex-row md:justify-center items-center mt-[100px] md:mt-[1px] md:my-5 md:py-10 h-[440px] bg-[#ffffff]' id="section4">
                <div className='card-text md:w-[700px]'>  
                    <div className='flex ml-3 mt-3'>
                        <div style={iconContStyle}>
                            <img
                                className="md:mr-1"
                                src={`/${content.icon}.svg`}
                                alt="Next.js logo"
                                width={36}
                                height={36}
                                style={iconStyle}
                            />
                        </div>
                        <div>
                            <span className={`${inter.className} text-[12px] uppercase text-[#6A6A6A]`}>{content.label}</span>
                            <h1 className={`${merriweather.className} text-[28px] md:text-[32px] text-[#DA0069] leading-[28px]`}>{content.title}</h1>
                        </div>
                    </div>
                    <div className={`${inter.className} ml-3 mt-3 text-[#6A6A6A]`} dangerouslySetInnerHTML={{__html: content.description}}></div>
                    <div className='ml-3 mt-3'>
                        <span className={`${merriweather.className} text-[19px] text-[#DA0069]`}>Consequatur rerum molestiae <span className={`text-[#DA0069] ml-2 btn-arrow-visible ${inter.className}`}>→</span></span>
                    </div>
                </div>
                <div className='md:w-[400px] h-[400px] md:mr-8'>
                    <img
                        className="md:mr-1 md:rounded-full"
                        src='https://connecteam.com/static/frontend-home-task/jpg/praesentium-aspernatur-large.jpg'
                        alt="Next.js logo"
                        width={440}
                        height={440}
                        style={imageStyling}
                    />
                    <div style={imgIconContStyle} className='float-right md:float-left rounded-l-[50%] md:rounded-full bottom-[95%] md:bottom-[25%]'>
                        <img
                            className=""
                            src={`/${content.icon}.svg`}
                            alt="Next.js logo"
                            width={64}
                            height={64}
                            style={iconStyle}
                        />
                    </div>
                </div>
            </div>
        </>
    )


}