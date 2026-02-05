import { Link, useLocation } from "react-router";
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
                {routes.map((route) => {
                    const active = location === route.href;

                    return (
                        <Link
                            to={route.href}
                            key={route.href}
                            className="relative md:text-xl lg:text-2xl px-4 py-1 text-content-gray-dark"
                        >
                            <span className={`relative z-10 ${active ? "text-content font-bold" : ""}`}>
                                {t(route.label)}
                            </span>
                        </Link>
                    );
                })}
            </nav>
            <nav ref={menuRef}
                className={`absolute top-full left-0 w-full z-50
                            md:hidden
                            transition-all duration-300
                            overflow-hidden
                            px-3
                            ${openMenu ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="flex flex-col mb-2 shadow-[6px_6px_4px_rgba(0,0,0,0.25)]">
                    {
                        routes.map((route) => (
                            <Link onClick={() => setOpenMenu(!openMenu)} to={route.href} key={route.href} className={`border border-content-gray-dar bg-surface text-content-gray-dark text-base p-2.5 ${location === route.href && 'font-bold'}`}>
                                {t(route.label)}
                            </Link>
                        ))
                    }
                </div>
            </nav>
        </>
    )
}

export default Navbar;