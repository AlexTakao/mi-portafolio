import { Icons } from "../../assets/index"

type IconName = keyof typeof Icons;

type IconProps = {
    name: IconName;
    className?: string;
};

function Icon({ name, className }: IconProps) {
    const Svg = Icons[name];
    return <Svg className={className} aria-hidden/>
}

export default Icon;