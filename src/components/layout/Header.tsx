import icon from '@/assets/icon.svg';
import MenuOpen from '@/assets/menu-open.svg?react';
import MenuClose from '@/assets/menu-close.svg?react';
import { motion } from 'framer-motion';

import { Link } from 'react-router';
import Navbar from './Navbar';
import { useState } from 'react';

function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            <header className='pt-2.5 px-2.5 md:py-2.5 md:px-9 relative'>
                <div className='flex justify-between items-center flex-wrap'>
                    <Link to='/' className='flex items-center gap-3'>
                        <motion.img 
                            className="w-8 h-8 md:w-16 md:h-16" 
                            src={icon} 
                            alt="Logo de mi portafolio"
                            initial={{ opacity: 0, scale: 0.8, x: -20 }}
                            animate={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ rotate: 5, scale: 1.05, transition: { duration: 0.3 } }}
                        />
                        <motion.h1 
                            className='lg:text-5xl md:text-3xl text-2xl font-bold text-content'
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        >
                            AlexTakao
                        </motion.h1>
                    </Link>
                    <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    <motion.button 
                        className='md:hidden pb-2 px-1' 
                        onClick={() => { setOpenMenu(!openMenu) }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <motion.div
                            initial={false}
                            animate={{ rotate: openMenu ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {openMenu ? <MenuClose className="w-8 h-8 text-content"/> : <MenuOpen className="w-8 h-8 text-content"/>}
                        </motion.div>
                    </motion.button>
                </div>
            </header>
        </>
    );
}

export default Header;