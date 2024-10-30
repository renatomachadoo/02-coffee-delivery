import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { CoffeesContextProvider } from "./contexts/CoffeeContext";

export function App(){
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <Router/>
        </CoffeesContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
