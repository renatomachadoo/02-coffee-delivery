import { InputHTMLAttributes } from "react"
import { InputContainer } from "./styles"
import { useFormContext } from "react-hook-form"
interface InputProps extends InputHTMLAttributes<HTMLInputElement> { 
    optional?: boolean
    registerName: string
}

export function Input({optional = false, registerName, ...rest}: InputProps){
    const { register } = useFormContext()

    return (
        <InputContainer>
            <input type="text" {...rest} {...register(registerName)} />
            {optional && <span>Opcional</span>}
        </InputContainer>
    )
}