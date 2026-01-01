import icon from '@/assets/icon.svg';
import MenuOpen from '@/assets/menu-open.svg?react';
import MenuClose from '@/assets/menu-close.svg?react';

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
                        <img className="w-8 h-8 md:w-16 md:h-16" src={icon} alt="Logo de mi portafolio" />
                        <h1 className='lg:text-5xl md:text-3xl text-2xl font-bold text-content'>AlexTakao</h1>
                    </Link>
                    <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
                    <button className='md:hidden pb-2 px-1' onClick={() => { setOpenMenu(!openMenu) }}>
                        {openMenu ? <MenuClose className="w-8 h-8 text-content"/> : <MenuOpen className="w-8 h-8 text-content"/>}
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;