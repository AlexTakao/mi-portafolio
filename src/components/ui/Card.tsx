import { useTranslation } from 'react-i18next';
import PhotoCard from '../../assets/foto.svg?react';
import PhotoCardDark from '../../assets/foto-dark.svg?react';
function Card(){
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
                        md:gap-14
                        md:shadow-offset">
            <PhotoCard className="block dark:hidden max-h-60 md:max-w-60 md:h-auto"/>
            <PhotoCardDark className="hidden dark:block max-h-60 md:max-w-60 md:h-auto" />
            <div className="w-full flex flex-col gap-2.5">
                <b className='text-base md:text-4xl'>{t('CAREER')}</b>
                <p className='text-sm md:text-2xl'>{t('DESCRPERSONAL')}</p>
            </div>
        </div>
    );
}

export default Card;