import { CoffeeContainer, Badge, AddCartButton } from "./styles";
import { InputNumber } from "../../../../components/InputNumber";

import coffeeImage from "../../../../assets/coffees/Coffee.svg"

import { ShoppingCartSimple } from "@phosphor-icons/react";

export function CoffeeCard(){
    return(
        <CoffeeContainer>
            <img src={coffeeImage} alt="Café Tradicional" />
            <div className="badges">
                <Badge>
                    Tradicional
                </Badge>
                <Badge>
                    Gelato
                </Badge>
            </div>
            <h3>Expresso Tradicional</h3>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div className="actions">
                <p>
                    R$ 
                    <span>
                        9,90
                    </span>
                </p>
                <div>
                    <InputNumber/>
                    <AddCartButton>
                        <ShoppingCartSimple size={22} weight="fill"/>
                    </AddCartButton>
                </div>
            </div>
        </CoffeeContainer>
    )
}