import Icon from "@/components/ui/Icon";
import { Icons } from "@/assets/index"
type IconName = keyof typeof Icons;

interface ButtonPrincipalProps {
    texto: string;
    icon: IconName;
    onClick: () => void;
}

function ButtonPrincipal({ texto, icon, onClick }: ButtonPrincipalProps) {
    return (
        <button className="flex flex-row px-2.5 py-1 bg-surface text-content shadow-offset-sm border border-surface-inverse w-full gap-1.5 cursor-pointer active:shadow-none" onClick={onClick}>
            <Icon name={icon} className="max-h-6" /> {texto}
        </button>
    );
}

export default ButtonPrincipal;