import Link from 'next/link';
import Image from "next/image";
import { merriweather, inter } from '@/app/ui/fonts';
import { getFooterContent } from '@/app/lib/data';
import FooterForm from '@/app/ui/footer-form';

export default async function FormSection() {

    const content = await getFooterContent();

    return (
        <>
            <div className="flex flex-col md:flex-row justify-center bg-[#F8F8F8] pt-10 gap-4">
                <div className="form-text md:w-[404px] ml-3 mt-3">
                    <h2 className={`text-[32px] text-[#FF9900] font-bold ${merriweather.className}`}>{content.intro.title}</h2>
                    <div className={`${inter.className} text-[19px] form-para-cont mt-3`} dangerouslySetInnerHTML={{ __html: content.intro.text }}></div>
                    <div className='mt-3'>
                        <span className={`text-[19px] text-[#FF9900] ${merriweather.className}`}>In pariatur et dolor <span className={`text-[#FF9900] ml-2 btn-arrow-visible ${inter.className}`}>→</span></span>
                    </div>
                </div>
                <div className='md:w-[700px]'>
                    <FooterForm formContent={content.form} className={inter.className} />
                </div>
            </div>
        </>
    )
}