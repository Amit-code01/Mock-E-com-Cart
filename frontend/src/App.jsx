import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, Container } from "@mui/material";
import Navbar from "./components/Navbar.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import Cart from "./pages/Cart.jsx";
import Checkout from "./pages/Checkout.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import Products from "./pages/Products.jsx";



const theme = createTheme({
  palette: {
    background: {
      default: "#e3f2fd", // Change this to your desired color
    },
  },
});








function App() {
  return (
     <ThemeProvider theme={theme}>
       <CartProvider>
    <Router>
      <CssBaseline />
      <Navbar />
      <Container sx={{ mt: 4 }}>
        <Routes>
           <Route path="/" element={<Products />} />
        
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Container>
    </Router>
      </CartProvider>
         </ThemeProvider>
  );
}

export default App;
