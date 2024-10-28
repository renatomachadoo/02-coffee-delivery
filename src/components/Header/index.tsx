import { HeaderContainer, LocationButton, CartButton } from "./styles"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg"

export function Header(){
    return (
        <HeaderContainer>
            <img src={coffeeDeliveryLogo} alt="Um copo roxo de café com o texto Coffee Delivery" />
            <div className="actions">
                <LocationButton>
                    <MapPin size={22} weight="fill" />
                    Porto Alegre, RS
                </LocationButton>
                <CartButton>
                    <ShoppingCart size={22} weight="fill" />
                    <span>
                        3
                    </span>
                </CartButton>
            </div>
        </HeaderContainer>
    )
}