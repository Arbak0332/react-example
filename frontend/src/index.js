import { CartContextProvider } from "./context/CartContext"
import MiniCart from "./components/Order/MiniCart"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { BrowserRouter } from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
root.render(
  <BrowserRouter>
    <CartContextProvider>
      <App />
      <MiniCart/>
    </CartContextProvider>
  </BrowserRouter>
)
