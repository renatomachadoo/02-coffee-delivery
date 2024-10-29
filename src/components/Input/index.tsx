import { InputHTMLAttributes } from "react"
import { InputContainer } from "./styles"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
    optional?: boolean
}

export function Input({optional = false, ...rest}: InputProps){
    return (
        <InputContainer>
            <input type="text" {...rest} />
            {optional && <span>Opcional</span>}
        </InputContainer>
    )
}