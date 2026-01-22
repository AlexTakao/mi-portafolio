type CardProps = {
    children: React.ReactNode;
    darkMode?: boolean;
    width?: string;
};

function Card({ children, darkMode = false, width = "w-full" }: CardProps) {
    const cardClass = darkMode ?
        "bg-surface-inverse text-content-gray-light md:shadow-offset shadow-offset-sm overflow-hidden" :
        "bg-surface text-content-gray-light md:shadow-offset shadow-offset-sm overflow-hidden border border-content";
    return (
        <div className={`${cardClass} ${width}`}>
            {children}
        </div>
    )
}

export default Card;