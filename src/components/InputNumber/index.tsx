import { useContext } from "react";
import { CoffeesContext } from "../../contexts/CoffeeContext";
import { useFormContext } from "react-hook-form";
import { InputNumberContainer, Button } from "./styles";

import { Minus, Plus } from "@phosphor-icons/react";

interface InputNumberProps {
    useForm?: boolean
    currentValue?: number
    coffeeId?: string
}

export function InputNumber({ useForm = true, currentValue = 1, coffeeId = "" }: InputNumberProps){
    const { register, getValues, setValue } = useFormContext()
    const { updateCoffeeQuantityInCart } = useContext(CoffeesContext)

    function handleIncrementQuantity() {
        if(useForm){
            const currentQuantity = getValues("quantity");
            setValue("quantity", Number(currentQuantity) + 1);
        }else{
            updateCoffeeQuantityInCart(coffeeId ,currentValue + 1)
        }
    }

    function handleDecrementQuantity() {
        if(useForm){
            const currentQuantity = getValues("quantity");
            if(currentQuantity > 1){
                setValue("quantity", Number(currentQuantity) - 1);
            }
        }else{
            updateCoffeeQuantityInCart(coffeeId ,currentValue - 1)
        }
        
    }

    return(
        <InputNumberContainer>
            <Button type="button" onClick={handleDecrementQuantity}>
                <Minus />
            </Button>
            {
                useForm ? (
                    <input type="number" readOnly {...register("quantity")}/>
                ):(
                    <input type="number" value={currentValue} readOnly/>
                )
            }
            <Button type="button" onClick={handleIncrementQuantity}>
                <Plus />
            </Button>
        </InputNumberContainer>
    )
}