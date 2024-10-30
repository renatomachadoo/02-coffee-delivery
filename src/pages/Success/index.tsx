import { SuccessContainer } from "./styles"

import { BackgroundIcon } from "../../components/BackgroundIcon"

import { MapPin, Timer, CurrencyDollar } from "@phosphor-icons/react"

import Illustration from "../../assets/success-illustration.svg"

export function Success(){
    return(
        <SuccessContainer>
            <div className="title">
                <h3>Uhu! Pedido Confirmado</h3>
                <p>Agora é só aguardar que logo o café chegará até você</p>
            </div>
            <main>
                <div className="order-info-container">
                    <div className="order-info">
                        <div>
                            <BackgroundIcon icon={MapPin} backgroundColor="purple" weight="fill" />
                            <div className="text">
                                <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
                                <span>Farrapos - Porto Alegre, RS</span>
                            </div>
                        </div>
                        <div>
                            <BackgroundIcon icon={Timer} backgroundColor="yellow" weight="fill" />
                            <div className="text">
                                <p>Previsão de entrega</p>
                                <span><strong>20 min - 30 min</strong></span>
                            </div>
                        </div>
                        <div>
                            <BackgroundIcon icon={CurrencyDollar} backgroundColor="darkYellow" />
                            <div className="text">
                                <p>Pagamento na entrega</p>
                                <span><strong>Cartão de crédito</strong></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="illustration-container">
                    <img src={Illustration} alt="" />
                </div>
            </main>
        </SuccessContainer>
    )
}