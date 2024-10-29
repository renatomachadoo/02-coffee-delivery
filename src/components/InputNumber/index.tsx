import { InputNumberContainer, Button } from "./styles";

import { Minus, Plus } from "@phosphor-icons/react";

export function InputNumber(){
    return(
        <InputNumberContainer>
            <Button>
                <Minus />
            </Button>
            <input type="number"/>
            <Button>
                <Plus />
            </Button>
        </InputNumberContainer>
    )
}