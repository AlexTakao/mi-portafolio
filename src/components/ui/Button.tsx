import Icon from "./Icon";
import { Icons } from "../../assets/index"
type IconName = keyof typeof Icons;

interface ButtonPrincipalProps {
  texto: string;
  icon: IconName;
}

function ButtonPrincipal({texto, icon}: ButtonPrincipalProps) {
    return (
        <button className="flex flex-row px-2.5 py-1 bg-surface text-content shadow-offset-sm border border-surface-inverse w-full gap-1.5">
            <Icon name={icon} className="max-h-6"/> {texto}
        </button>
    );
}

export default ButtonPrincipal;