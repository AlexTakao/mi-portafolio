import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = "", ...props }, ref) => {
        return (
            <input
                ref={ref}
                className={`
                    w-full
                    border border-content-gray-dark
                    rounded-md
                    px-3 py-2
                    text-sm
                    outline-none
                    transition-colors duration-200

                    focus:border-content
                    focus:ring-1 focus:ring-content

                    disabled:bg-gray-100
                    disabled:cursor-not-allowed
                    disabled:opacity-70

                    ${className}
                `}
                {...props}
            />
        );
    }
);

Input.displayName = "Input";
