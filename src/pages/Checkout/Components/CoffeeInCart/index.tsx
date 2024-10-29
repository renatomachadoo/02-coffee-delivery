import { CoffeeInCartContainer, RemoveButton } from "./styles"
import { InputNumber } from "../../../../components/InputNumber"

import CoffeeImg from "../../../../assets/coffees/Coffee.svg"

import { Trash } from "@phosphor-icons/react"

export function CoffeeInCart(){
    return(
        <CoffeeInCartContainer>
            <img src={CoffeeImg} />
            <div>
                <p>Café Tradicional</p>
                <div>
                    <InputNumber />
                    <RemoveButton>
                        <Trash size={16} />
                        REMOVER
                    </RemoveButton>
                </div>
            </div>
            <span>
                R$ 9,90
            </span>
        </CoffeeInCartContainer>
    )
}