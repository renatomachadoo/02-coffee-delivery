import { HomeContainer, AboutContainer, CoffeeGrid } from "./styles"

import coffeeDeliveryBanner from "../../assets/coffee-delivery-banner.svg"

import { BackgroundIcon } from "../../components/BackgroundIcon"

import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react"
import { CoffeeCard } from "./Components/CoffeeCard"

export function Home(){
    return(
        <HomeContainer>
            <AboutContainer>
                <div className="info-wrapper">
                    <h1>
                        Encontre o café perfeito para qualquer hora do dia
                    </h1>
                    <p>
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </p>
                    <div className="benefits-grid">
                        <div>
                            <BackgroundIcon backgroundColor="darkYellow" icon={ShoppingCart} />
                            Compra simples e segura
                        </div>
                        <div>
                            <BackgroundIcon backgroundColor="gray" icon={Package}/>
                            Embalagem mantém o café intacto
                        </div>
                        <div>
                            <BackgroundIcon backgroundColor="yellow" icon={Timer}/>
                            Entrega rápida e rastreada
                        </div>
                        <div>
                            <BackgroundIcon backgroundColor="purple" icon={Coffee}/>
                            O café chega fresquinho até você
                        </div>
                    </div>
                </div>
                <div className="img-wrapper">
                    <img src={coffeeDeliveryBanner} alt="Copo de café com o logo da CoffeeDelivery" />
                </div>
            </AboutContainer>
            <CoffeeGrid>
                <h2>Nossos cafés</h2>
                <main>
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                    <CoffeeCard />
                </main>
            </CoffeeGrid>
        </HomeContainer>
    )
}