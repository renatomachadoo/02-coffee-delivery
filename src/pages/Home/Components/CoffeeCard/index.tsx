import { useContext } from "react";
import { CoffeesContext } from "../../../../contexts/CoffeeContext";

import { CoffeeContainer, Badge, AddCartButton } from "./styles";
import { InputNumber } from "../../../../components/InputNumber";

import { ShoppingCartSimple } from "@phosphor-icons/react";

import { Coffee } from "../../../../contexts/CoffeeContext";

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"

const addItemToCartFormValidationSchema = zod.object({
    quantity: zod.number().min(1),
    coffeeId: zod.string().min(1)
})

interface CoffeeCardProps{
    coffee: Coffee,
}

type AddItemToCartData = zod.infer<typeof addItemToCartFormValidationSchema>

export function CoffeeCard({coffee} : CoffeeCardProps){
    const { addCoffeeToCart } = useContext(CoffeesContext)

    const addItemToCartForm = useForm<AddItemToCartData>({
        resolver: zodResolver(addItemToCartFormValidationSchema),
        defaultValues: {
            quantity: 1,
            coffeeId: coffee.id
        }
    })

    const { handleSubmit, reset, register } = addItemToCartForm

    function handleAddItemToCart(data : AddItemToCartData){
        addCoffeeToCart(data)
        reset()
    }

    return(
        <CoffeeContainer>
            <img src={coffee.image} alt={coffee.name} />
            <div className="badges">
                {
                    coffee.tags.map(tag => {
                        return <Badge key={tag}>{tag}</Badge>
                    })
                }
            </div>
            <h3>{coffee.name}</h3>
            <p>{coffee.description}</p>
            <div className="actions">
                <p>
                    R$ 
                    <span>
                        {coffee.price}
                    </span>
                </p>
                <form onSubmit={handleSubmit(handleAddItemToCart)}>
                    <FormProvider {...addItemToCartForm}>
                        <InputNumber/>
                    </FormProvider>
                    <input type="text" readOnly hidden {...register("coffeeId")}/>
                    <AddCartButton>
                        <ShoppingCartSimple size={22} weight="fill"/>
                    </AddCartButton>
                </form>
            </div>
        </CoffeeContainer>
    )
}