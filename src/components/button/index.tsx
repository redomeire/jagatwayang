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
        <button className={buttonClassName} {...props}>

        </button>
    )
}

const checkButtonColor = (variant: ColorVariant) => {
    const colorObj = {
        "primary": "",
        "secondary": "",
        "tertiary": "",
    }

    return colorObj[variant]
}

export default Button;
