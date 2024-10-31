import { useContext, useEffect } from "react"
import { CoffeesContext } from "../../contexts/CoffeeContext"
import { useNavigate } from "react-router-dom"
import { HeaderContainer, LocationButton, CartButton } from "./styles"
import { MapPin, ShoppingCart } from "@phosphor-icons/react"
import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg"

export function Header(){
    const {itemsInCart} = useContext(CoffeesContext)
    const navigate = useNavigate()

    function handleNavigateToHomePage(){
        navigate("/")
    }

    function handleNavigateToCheckoutPage(){
        navigate("/checkout")
    }

    const quantityInCart = itemsInCart.reduce((quantity, currentItem) => quantity + currentItem.quantity, 0)

    return (
        <HeaderContainer>
            <img title="Homepage" onClick={handleNavigateToHomePage} src={coffeeDeliveryLogo} alt="Um copo roxo de café com o texto Coffee Delivery" />
            <div className="actions">
                <LocationButton>
                    <MapPin size={22} weight="fill" />
                    Porto Alegre, RS
                </LocationButton>
                <CartButton title="View Cart" onClick={handleNavigateToCheckoutPage}>
                    <ShoppingCart size={22} weight="fill" />
                    {quantityInCart > 0 && (
                        <span>
                            {quantityInCart <= 9 ? quantityInCart : "9+"}
                        </span>
                    )}
                </CartButton>
            </div>
        </HeaderContainer>
    )
}