import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Snackbar,
  Alert,
  Container,
} from "@mui/material";
import { useCart } from "../context/CartContext.jsx";

const Products = () => {
  const { addToCart } = useCart();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const products = [
    {
      id: 1,
      name: "Nike Air Max",
      price: 5999,
      image: "https://dummyimage.com/400x300/000/fff&text=Nike+Air+Max",
    },
    {
      id: 2,
      name: "Apple Watch Series 9",
      price: 41999,
      image: "https://dummyimage.com/400x300/1a1a1a/ffffff&text=Apple+Watch",
    },
    {
      id: 3,
      name: "Boat Rockerz Headphones",
      price: 1999,
      image: "https://dummyimage.com/400x300/333/fff&text=Headphones",
    },
    {
      id: 4,
      name: "Sony Alpha Camera",
      price: 69999,
      image: "https://dummyimage.com/400x300/555/fff&text=Sony+Camera",
    },
    {
      id: 5,
      name: "iPhone 15 Pro",
      price: 134999,
      image: "https://dummyimage.com/400x300/444/fff&text=iPhone+15+Pro",
    },
    {
      id: 6,
      name: "MacBook Air M3",
      price: 124999,
      image: "https://dummyimage.com/400x300/666/fff&text=MacBook+Air+M3",
    },
    {
      id: 7,
      name: "Samsung Galaxy S24",
      price: 89999,
      image: "https://dummyimage.com/400x300/222/fff&text=Galaxy+S24",
    },
    {
      id: 8,
      name: "JBL Flip 6 Speaker",
      price: 8499,
      image: "https://dummyimage.com/400x300/111/fff&text=JBL+Flip+6",
    },
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setSnackbarMessage(`${product.name} added to cart`);
    setSnackbarOpen(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
       
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "60px",
        paddingBottom: "80px",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            mb: 5,
            letterSpacing: 1,
            color: "#333",
          }}
        >
          Featured Products
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card
                sx={{
                  borderRadius: "16px",
                  boxShadow: 5,
                  height: "100%",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: 8,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  loading="lazy"
                  sx={{
                    objectFit: "cover",
                    borderTopLeftRadius: "16px",
                    borderTopRightRadius: "16px",
                  }}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="primary"
                    fontWeight={500}
                    gutterBottom
                  >
                    ₹{Number(product.price).toLocaleString("en-IN")}
                  </Typography>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleAddToCart(product)}
                    sx={{
                      mt: 1,
                      px: 3,
                      borderRadius: "12px",
                      textTransform: "none",
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Snackbar
          open={snackbarOpen}
          autoHideDuration={2000}
          onClose={() => setSnackbarOpen(false)}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={() => setSnackbarOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export default Products;
