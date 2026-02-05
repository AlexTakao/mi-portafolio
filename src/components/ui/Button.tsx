import Icon from "@/components/ui/Icon";
import { Icons } from "@/assets/index";

type IconName = keyof typeof Icons;

interface ButtonPrincipalProps {
    texto?: string;
    icon?: IconName;
    sinTexto?: boolean;
    widthFull?: boolean;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
}

function ButtonPrincipal({
    texto,
    icon,
    sinTexto = false,
    widthFull = false,
    type = "button",
    onClick,
}: ButtonPrincipalProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                        flex items-center
                        px-2.5 py-1
                        bg-surface text-content
                        shadow-offset-sm
                        border border-surface-inverse
                        gap-1.5
                        cursor-pointer
                        active:shadow-none
                        ${widthFull ? "w-full" : "w-auto"}
                    `}
        >
            {icon && <Icon name={icon} className="max-h-6" />}
            {!sinTexto && texto}
        </button>
    );
}

export default ButtonPrincipal;
