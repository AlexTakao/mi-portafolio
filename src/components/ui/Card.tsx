import { useTranslation } from 'react-i18next';
import PhotoCard from '@/assets/foto.svg?react';
import PhotoCardDark from '@/assets/foto-dark.svg?react';
function Card() {
    const { t } = useTranslation();

    return (
        <div className="p-8 
                bg-surface-inverse 
                text-content-gray-light
                flex flex-col
                justify-center
                items-center 
                gap-8
                shadow-offset-sm
                md:flex-row
                md:gap-10
                lg:gap-14
                md:shadow-offset
                overflow-hidden">
            <PhotoCard className="block dark:hidden w-45 h-auto max-w-full md:w-58 shrink-0" />
            <PhotoCardDark className="hidden dark:block w-45 h-auto max-w-full md:w-58 shrink-0" />
            <div className="w-full flex flex-col gap-2.5">
                <b className='text-lg md:text-xl lg:text-4xl'>{t('CAREER')}</b>
                <p className='text-sm md:text-base lg:text-2xl'>{t('DESCRPERSONAL')}</p>
            </div>
        </div>
    );
}

export default Card;