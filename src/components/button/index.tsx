import React from "react";
import { twMerge } from "tailwind-merge";

type ColorVariant = 'primary' | 'secondary' | 'tertiary'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: ColorVariant
    className?: string
}

const Button = (props: Props) => {
    const buttonClassName = twMerge(checkButtonColor(props.variant), props.className ?? '')

    return (
        <button {...props} className={buttonClassName}>

        </button>
    )
}

const checkButtonColor = (variant: ColorVariant) => {
    const colorObj = {
        "primary": "p-3 rounded-full bg-gradient-to-r from-[#745021] to-[#773B04] text-opacity-50 text-xl",
        "secondary": "p-3 rounded-full bg-transparent text-white border-white border-[1.5px] hover:bg-white hover:text-black transition duration-200 active:brightness-50 text-xl",
        "tertiary": "",
    }

    return colorObj[variant]
}

export default Button;
