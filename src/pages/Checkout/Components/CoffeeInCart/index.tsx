import { useContext } from "react"
import { CoffeesContext } from "../../../../contexts/CoffeeContext"

import { CoffeeInCartContainer, RemoveButton } from "./styles"
import { InputNumber } from "../../../../components/InputNumber"

import { Coffee } from "../../../../contexts/CoffeeContext"

import { Trash } from "@phosphor-icons/react"

interface CoffeeInCartProps {
    data : Coffee
}

export function CoffeeInCart({data}: CoffeeInCartProps){
    const { removeCoffeeFromCart } = useContext(CoffeesContext)

    function handleRemoveItemFromCart(){
        removeCoffeeFromCart(data.id)
    }


    return(
        <CoffeeInCartContainer>
            <img src={data.image} />
            <div>
                <p>{data.name}</p>
                <div>
                    <InputNumber useForm={false} currentValue={data.quantity} coffeeId={data.id}/>
                    <RemoveButton onClick={handleRemoveItemFromCart} type="button">
                        <Trash size={16} />
                        REMOVER
                    </RemoveButton>
                </div>
            </div>
            <span>
                R$ {(Number(data.price) * Number(data.quantity)).toFixed(2)}
            </span>
        </CoffeeInCartContainer>
    )
}