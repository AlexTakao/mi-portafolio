import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_MENUS } from "@/data/navMenu";
import type { NavbarProps } from "@/types/nav";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

function Navbar({ section = 'home', openMenu, setOpenMenu }: NavbarProps) {
    const location: string = useLocation().pathname;
    const routes = NAV_MENUS[section] ?? [];
    const menuRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [setOpenMenu]);

    return (
        <>
            <nav className="hidden md:flex gap-2 text-content-gray-dark flex-wrap relative">
                {routes.map((route, index) => {
                    const active = location === route.href;

                    return (
                        <motion.div
                            key={route.href}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.4, 
                                delay: index * 0.1 + 0.2,
                                ease: "easeOut" 
                            }}
                        >
                            <Link
                                to={route.href}
                                className="relative md:text-xl lg:text-2xl px-4 py-1 text-content-gray-dark block"
                            >
                                <motion.span 
                                    className={`relative z-10 ${active ? "text-content font-bold" : ""}`}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {t(route.label)}
                                </motion.span>
                                {active && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-content"
                                        layoutId="underline"
                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                    />
                                )}
                            </Link>
                        </motion.div>
                    );
                })}
            </nav>
            <AnimatePresence>
                {openMenu && (
                    <motion.nav 
                        ref={menuRef}
                        className="absolute top-full left-0 w-full z-50 md:hidden px-3"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="flex flex-col mb-2 shadow-[6px_6px_4px_rgba(0,0,0,0.25)]">
                            {routes.map((route, index) => (
                                <motion.div
                                    key={route.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ 
                                        duration: 0.3, 
                                        delay: index * 0.05,
                                        ease: "easeOut" 
                                    }}
                                >
                                    <Link 
                                        onClick={() => setOpenMenu(!openMenu)} 
                                        to={route.href} 
                                        className={`border border-content-gray-dar bg-surface text-content-gray-dark text-base p-2.5 block ${location === route.href && 'font-bold'}`}
                                    >
                                        {t(route.label)}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}

export default Navbar;