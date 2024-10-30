import { createContext, ReactNode, useReducer } from "react";

import CafeTradicional from "../assets/coffees/tradicional.svg"
import Americano from "../assets/coffees/americano.svg"
import Cremoso from "../assets/coffees/cremoso.svg"
import Gelado from "../assets/coffees/gelado.svg"
import ComLeite from "../assets/coffees/comleite.svg"
import Latte from "../assets/coffees/latte.svg"
import Capuccino from "../assets/coffees/capuccino.svg"
import Macchiato from "../assets/coffees/macchiato.svg"
import Mocaccino from "../assets/coffees/mochaccino.svg"
import ChocolateQuente from "../assets/coffees/chocolatequente.svg"
import Cubano from "../assets/coffees/cubano.svg"
import Havaiano from "../assets/coffees/havaiano.svg"
import Arabe from "../assets/coffees/arabe.svg"
import Irlandes from "../assets/coffees/irlandes.svg"

import { cartReducer, ItemInCart } from "../reducers/cart/reducer";
import { addItemToCart, removeItemFromCart, updateItemQuantity } from "../reducers/cart/actions";

export interface Coffee {
  id: string
  name: string
  description: string
  tags: string[]
  image: string
  price: number
  quantity?: number
}

interface CoffeesContextType {
  coffees: Coffee[]
  itemsInCart: ItemInCart[]
  addCoffeeToCart: ({quantity, coffeeId} : ItemInCart) => void
  removeCoffeeFromCart: (coffeeId: string) => void
  updateCoffeeQuantityInCart: (coffeeId : string, quantity : number) => void
}

export const CoffeesContext = createContext({} as CoffeesContextType)

interface CoffeesContextProviderProps {
  children: ReactNode
}

const coffees: Coffee[] = [
  {
    id : "1",
    name : "Expresso Tradicional",
    description : "O tradicional café feito com água quente e grãos moídos",
    image: CafeTradicional,
    tags: ["Tradicional"],
    price: 9.90
  },
  {
    id : "2",
    name : "Expresso Americano",
    description : "Expresso diluído, menos intenso que o tradicional",
    image: Americano,
    tags: ["Tradicional"],
    price: 9.90
  },
  {
    id : "3",
    name : "Expresso Cremoso",
    description : "Café expresso tradicional com espuma cremosa",
    image: Cremoso,
    tags: ["Tradicional"],
    price: 9.90
  },
  {
    id : "4",
    name : "Expresso Gelado",
    description : "Café expresso tradicional com espuma cremosa",
    image: Gelado,
    tags: ["Tradicional", "Gelado"],
    price: 9.90
  },
  {
    id : "5",
    name : "Café com Leite",
    description : "Meio a meio de expresso tradicional com leite vaporizado",
    image: ComLeite,
    tags: ["Tradicional", "Com Leite"],
    price: 9.90
  },
  {
    id : "6",
    name : "Latte",
    description : "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    image: Latte,
    tags: ["Tradicional", "com leite"],
    price: 9.90
  },
  {
    id : "7",
    name : "Capuccino",
    description : "Bebida com canela feita de doses iguais de café, leite e espuma",
    image: Capuccino,
    tags: ["Tradicional", "com leite"],
    price: 9.90
  },
  {
    id : "8",
    name : "Macchiato",
    description : "Café expresso misturado com um pouco de leite quente e espuma",
    image: Macchiato,
    tags: ["Tradicional", "com leite"],
    price: 9.90
  },
  {
    id : "9",
    name : "Mocaccino",
    description : "Café expresso com calda de chocolate, pouco leite e espuma",
    image: Mocaccino,
    tags: ["Tradicional", "com leite"],
    price: 9.90
  },
  {
    id : "10",
    name : "Chocolate Quente",
    description : "Bebida feita com chocolate dissolvido no leite quente e café",
    image: ChocolateQuente,
    tags: ["especial", "com leite"],
    price: 9.90
  },
  {
    id : "11",
    name : "Cubano",
    description : "Drink gelado de café expresso com rum, creme de leite e hortelã",
    image: Cubano,
    tags: ["especial", "alcoólico", "gelado"],
    price: 9.90
  },
  {
    id : "12",
    name : "Havaiano",
    description : "Bebida adocicada preparada com café e leite de coco",
    image: Havaiano,
    tags: ["especial"],
    price: 9.90
  },
  {
    id : "13",
    name : "Árabe",
    description : "Bebida preparada com grãos de café árabe e especiarias",
    image: Arabe,
    tags: ["especial"],
    price: 9.90
  },
  {
    id : "14",
    name : "Irlandês",
    description : "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    image: Irlandes,
    tags: ["especial", "alcoólico"],
    price: 9.90
  },
]

export function CoffeesContextProvider({
    children,
  }: CoffeesContextProviderProps) {

    const [itemsInCartState, dispatch] = useReducer(
      cartReducer,{
        itemsInCart: [],
        finishedOrder: {}
      }
    )

    const { itemsInCart } = itemsInCartState

    function addCoffeeToCart(data : ItemInCart){
      dispatch(addItemToCart({
        quantity: data.quantity,
        coffeeId: data.coffeeId
      }))
    }

    function removeCoffeeFromCart(itemId: string){
      dispatch(removeItemFromCart(itemId))
    }

    function updateCoffeeQuantityInCart(coffeeId : string, quantity : number){
      dispatch(updateItemQuantity(coffeeId, quantity))
    }
  
    return (
      <CoffeesContext.Provider
        value={{
          itemsInCart,
          coffees,
          addCoffeeToCart,
          removeCoffeeFromCart,
          updateCoffeeQuantityInCart
        }}
      >
        {children}
      </CoffeesContext.Provider>
    )
  }