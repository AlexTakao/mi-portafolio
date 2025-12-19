export interface NavItem {
    label: string;
    href: string;
}

export interface NavbarProps {
    section?: string
    openMenu: boolean
    setOpenMenu: (v: boolean) => void
}

export type NavMenuGroup = Record<string, NavItem[]>;