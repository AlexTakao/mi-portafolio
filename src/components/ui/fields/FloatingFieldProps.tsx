import { Input } from "./Input";

type FloatingFieldProps = {
    label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function FloatingField({ label, id, ...props }: FloatingFieldProps) {
    return (
        <div className="relative">
            <Input
                id={id}
                placeholder=" "
                className="peer"
                {...props}
            />

            <label
                htmlFor={id}
                className="
                    absolute left-3 top-1/2
                    -translate-y-1/2
                    bg-surface px-1
                    text-sm text-content-gray-dark
                    pointer-events-none
                    transition-all

                    peer-focus:top-0
                    peer-focus:text-xs
                    peer-focus:text-content

                    peer-not-placeholder-shown:top-0
                    peer-not-placeholder-shown:text-xs
                "
            >
                {label}
            </label>
        </div>
    );
}
