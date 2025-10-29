import React from "react";
import { Card, CardContent, CardMedia, Typography, Button, Box } from "@mui/material";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card
      sx={{
        maxWidth: 280,
        borderRadius: 3,
        boxShadow: 3,
        transition: "0.3s",
        "&:hover": { transform: "scale(1.03)", boxShadow: 6 },
      }}
    >
      <CardMedia
        component="img"
        height="180"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: "contain", p: 2 }}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{product.price.toFixed(2)}
        </Typography>
        <Box mt={2} textAlign="center">
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
