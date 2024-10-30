import { useNavigate } from "react-router-dom"
import { CheckoutContainer } from "./styles"
import { Input } from "../../components/Input"
import { CoffeeInCart } from "./Components/CoffeeInCart"

import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react"
import { useContext, useState } from "react"
import { CoffeesContext } from "../../contexts/CoffeeContext"

import { Coffee } from "../../contexts/CoffeeContext"

import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod"

const checkoutFormValidationSchema = zod.object({
    cep: zod.string().min(1),
    street: zod.string().min(1),
    number: zod.string().min(1),
    complement: zod.string(),
    neighborhood: zod.string().min(1),
    city: zod.string().min(1),
    state: zod.string().min(1)
})

type CheckoutData = zod.infer<typeof checkoutFormValidationSchema>

type PaymentMethod = "credit_card" | "debit_card" | "cash" | ""

export function Checkout(){
    const navigate = useNavigate()
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("")
    const { coffees, itemsInCart } = useContext(CoffeesContext)

    const checkoutForm = useForm<CheckoutData>({
        resolver: zodResolver(checkoutFormValidationSchema),
        defaultValues: {
            cep: "",
            street: "",
            number: "",
            complement: "",
            neighborhood: "",
            city: "",
            state: ""
        }
    })

    const { handleSubmit, reset } = checkoutForm

    function handleFinishCheckout(data : CheckoutData){
        console.log(data)

        if(!paymentMethod){
            return alert("Selecione o método de pagamento!")
        }

        reset()
        navigate("/success")
    }

    const coffeesInCartData: Coffee[] = []
    let itemsTotalPrice: number = 0
    itemsInCart.map((item) => {
        coffees.forEach(coffee => {
            if(item.coffeeId === coffee.id){
                coffee.quantity = item.quantity
                itemsTotalPrice = itemsTotalPrice + (coffee.quantity * coffee.price)
                return coffeesInCartData.push(coffee)
            }
        })
    })

    const deliveryPrice = 3.50
    const totalPrice = deliveryPrice + itemsTotalPrice

    return (
        <CheckoutContainer onSubmit={handleSubmit(handleFinishCheckout)}>
            <FormProvider {...checkoutForm}>
                <main>
                    <h3>Complete o seu pedido</h3>
                    <div className="address">
                        <header>
                            <MapPinLine size={22} />
                            <div>
                                <p>Endereço de Entrega</p>
                                <span>Informe o endereço onde deseja receber seu pedido</span>
                            </div>
                        </header>
                        <div className="inputs-container">
                            <div className="cols-3">
                                <Input type="text" placeholder="CEP" registerName="cep"/>
                            </div>
                            <div>
                                <Input type="text" placeholder="Rua" registerName="street"/>
                            </div>
                            <div className="cols-2">
                                <Input type="text" placeholder="Número" registerName="number"/>
                                <Input type="text" placeholder="Complemento" optional registerName="complement" />
                            </div>
                            <div className="cols-2">
                                <Input type="text" placeholder="Bairro" registerName="neighborhood"/>
                                <div className="cols-2-auto">
                                    <Input type="text" placeholder="Cidade" registerName="city" />
                                    <Input type="text" placeholder="UF"  registerName="state"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="payment">
                        <header>
                            <CurrencyDollar size={22} />
                            <div>
                                <p>Pagamento</p>
                                <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                            </div>
                        </header>
                        <div className="payment-method">
                            <button type="button" onClick={() => setPaymentMethod("credit_card")} className={paymentMethod === "credit_card" ? "payment-method-selected" : ""}>
                                <CreditCard size={16} />
                                Cartão de crédito
                            </button>
                            <button type="button" onClick={() => setPaymentMethod("debit_card")} className={paymentMethod === "debit_card" ? "payment-method-selected" : ""}>
                                <Bank size={16} />
                                Cartão de débito
                            </button>
                            <button type="button" onClick={() => setPaymentMethod("cash")} className={paymentMethod === "cash" ? "payment-method-selected" : ""}>
                                <Money size={16} />
                                Dinheiro
                            </button>
                        </div>
                    </div>
                </main>
                <aside>
                    <h3>Cafés selecionados</h3>
                    <div>
                        {
                            coffeesInCartData.map((coffee) => {
                                return  <CoffeeInCart key={coffee.id} data={coffee} />
                            })
                        }
                        <footer>
                            <div>
                                <span>Total de itens</span>
                                <p>R$ {itemsTotalPrice.toFixed(2)}</p>
                            </div>
                            <div>
                                <span>Entrega</span>
                                <p>R$ {deliveryPrice.toFixed(2)}</p>
                            </div>
                            <div className="title">
                                <p>Total</p>
                                <p>R$ {totalPrice.toFixed(2)}</p>
                            </div>
                            <button type="submit" className="confirm-checkout-btn">
                                CONFIRMAR PEDIDO
                            </button>
                        </footer>
                    </div>
                </aside>
            </FormProvider>
        </CheckoutContainer>
    )
}