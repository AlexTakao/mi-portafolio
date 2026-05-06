import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import PhotoCard from '@/assets/foto.svg?react';
import PhotoCardDark from '@/assets/foto-dark.svg?react';
import Card from '../ui/Card';

function CareerCard() {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            <Card darkMode={true}>
                <div className="p-8
                    md:flex-row
                    flex flex-col
                    justify-center
                    items-center 
                    gap-8
                    md:gap-10
                    lg:gap-14">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        whileHover={{ y: -5, transition: { duration: 0.3 } }}
                    >
                        <PhotoCard className="block dark:hidden w-45 h-auto max-w-full md:w-58 shrink-0" />
                        <PhotoCardDark className="hidden dark:block w-45 h-auto max-w-full md:w-58 shrink-0" />
                    </motion.div>
                    <motion.div 
                        className="w-full flex flex-col gap-2.5"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                    >
                        <motion.b 
                            className='text-lg md:text-xl lg:text-4xl'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                        >
                            {t('CAREER')}
                        </motion.b>
                        <motion.p 
                            className='text-sm md:text-base lg:text-2xl'
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
                        >
                            {t('DESCRPERSONAL1')}<b className='font-semibold'>Noel Jenaro Ortega Aguilar</b>{t('DESCRPERSONAL2')}
                        </motion.p>
                    </motion.div>
                </div>
            </Card>
        </motion.div>
    );
}

export default CareerCard;