import { useContext } from "react"
import { CoffeesContext } from "../../contexts/CoffeeContext"

import { HomeContainer, AboutContainer, CoffeeGrid } from "./styles"

import coffeeDeliveryBanner from "../../assets/coffee-delivery-banner.svg"

import { BackgroundIcon } from "../../components/BackgroundIcon"

import { ShoppingCart, Timer, Package, Coffee } from "@phosphor-icons/react"
import { CoffeeCard } from "./Components/CoffeeCard"

export function Home(){
    const { coffees } = useContext(CoffeesContext)

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
                            <BackgroundIcon backgroundColor="darkYellow" icon={ShoppingCart} weight="fill" />
                            Compra simples e segura
                        </div>
                        <div>
                            <BackgroundIcon backgroundColor="gray" icon={Package} weight="fill"/>
                            Embalagem mantém o café intacto
                        </div>
                        <div>
                            <BackgroundIcon backgroundColor="yellow" icon={Timer} weight="fill"/>
                            Entrega rápida e rastreada
                        </div>
                        <div>
                            <BackgroundIcon backgroundColor="purple" icon={Coffee} weight="fill"/>
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
                    {
                        coffees.map(coffee => {
                            return <CoffeeCard key={coffee.id} coffee={coffee} />
                        })
                    }
                </main>
            </CoffeeGrid>
        </HomeContainer>
    )
}