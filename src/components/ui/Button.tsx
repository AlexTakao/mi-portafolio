import Icon from "@/components/ui/Icon";
import { Icons } from "@/assets/index"
type IconName = keyof typeof Icons;

interface ButtonPrincipalProps {
    texto?: string;
    icon: IconName;
    sinTexto?: boolean;
    widthFull?: boolean;
    onClick: () => void;
}

function ButtonPrincipal({ texto, icon, sinTexto = false, widthFull = false, onClick }: ButtonPrincipalProps) {
    return (
        <button
            className={`
                        flex items-center
                        px-2.5 py-1
                        bg-surface text-content
                        shadow-offset-sm
                        border border-surface-inverse
                        gap-1.5
                        cursor-pointer
                        active:shadow-none
                        ${widthFull ? 'w-full' : 'w-auto'}
                    `}
            onClick={onClick}
        >
            <Icon name={icon} className="max-h-6" />
            {!sinTexto && texto}
        </button>

    );
}

export default ButtonPrincipal;