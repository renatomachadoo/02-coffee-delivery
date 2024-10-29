import { CheckoutContainer } from "./styles"
import { Input } from "../../components/Input"
import { CoffeeInCart } from "./Components/CoffeeInCart"

import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react"

export function Checkout(){
    return (
        <CheckoutContainer>
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
                            <Input type="text" placeholder="CEP" />
                        </div>
                        <div>
                            <Input type="text" placeholder="Rua"/>
                        </div>
                        <div className="cols-2">
                            <Input type="text" placeholder="Número"/>
                            <Input type="text" placeholder="Complemento" optional/>
                        </div>
                        <div className="cols-2">
                            <Input type="text" placeholder="Bairro"/>
                            <div className="cols-2-auto">
                                <Input type="text" placeholder="Cidade"/>
                                <Input type="text" placeholder="UF"/>
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
                        <button className="payment-method-selected">
                            <CreditCard size={16} />
                            Cartão de crédito
                        </button>
                        <button>
                            <Bank size={16} />
                            Cartão de débito
                        </button>
                        <button>
                            <Money size={16} />
                            Dinheiro
                        </button>

                    </div>
                </div>
            </main>
            <aside>
                <h3>Cafés selecionados</h3>
                <div>
                    <CoffeeInCart />
                    <CoffeeInCart />
                    <footer>
                        <div>
                            <span>Total de itens</span>
                            <p>R$ 29,70</p>
                        </div>
                        <div>
                            <span>Entrega</span>
                            <p>R$ 3,50</p>
                        </div>
                        <div className="title">
                            <p>Total</p>
                            <p>R$ 33,20</p>
                        </div>
                        <button className="confirm-checkout-btn">
                            CONFIRMAR PEDIDO
                        </button>
                    </footer>
                </div>
            </aside>
        </CheckoutContainer>
    )
}