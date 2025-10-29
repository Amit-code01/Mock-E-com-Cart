import React from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  Divider,
  Grid,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../context/CartContext.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart = [], removeFromCart } = useCart(); // ✅ Default empty array for safety

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <Box textAlign="center" mt={5}>
        <Typography variant="h5" gutterBottom>
          Your cart is empty 🛒
        </Typography>
        <Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
          Back to Shop
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cart.map((item) => (
        <Paper key={item.id} sx={{ p: 2, mb: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={3} sm={2}>
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", borderRadius: 8 }}
              />
            </Grid>
            <Grid item xs={6} sm={8}>
              <Typography variant="h6">{item.name}</Typography>
              <Typography color="text.secondary">
                ₹{item.price.toLocaleString()} × {item.qty}
              </Typography>
            </Grid>
            <Grid item xs={3} sm={2} textAlign="right">
              <IconButton onClick={() => removeFromCart(item.id)} color="error">
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      ))}

      <Divider sx={{ my: 2 }} />

      <Typography variant="h5" gutterBottom>
        Total: ₹{total.toLocaleString()}
      </Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/checkout"
        sx={{ mt: 2 }}
      >
        Proceed to Checkout
      </Button>
    </Box>
  );
};

export default Cart;
