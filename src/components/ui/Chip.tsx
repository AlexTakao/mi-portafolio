import Icon from "./Icon";

type ChipProps = {
    color?: string;
    colorText?: string;
    text?: string;
    textSize?: string;
    fontWeight?: string;
    rounded?: boolean;
    iconName?: string | null;
    iconRight?: boolean;
};

function Chip({ color, colorText, text, textSize = "text-sm", fontWeight = "font-medium", rounded = true, iconName = null, iconRight = false }: ChipProps) {
    const flexDirection = iconRight ? 'flex-row-reverse' : 'flex-row';
    return (
        <div className={`inline-flex ${flexDirection} bg-${color} text-${colorText} px-4 gap-2 py-1 ${rounded ? 'rounded-full' : 'rounded-md'} items-center ${textSize} ${fontWeight}`}>
            {iconName && <Icon name={iconName as keyof typeof Icon} className="max-h-6" />}
            {text}
        </div>
    )
}

export default Chip;