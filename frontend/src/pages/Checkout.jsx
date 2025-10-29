import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { useCart } from "../context/CartContext.jsx";

const Checkout = () => {
  const { cart = [], clearCart } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    houseNo: "",
    village: "",
    district: "",
    state: "",
    pincode: "",
  });

  const [receipt, setReceipt] = useState(null);
  const [open, setOpen] = useState(false);
  const [showReceipt, setShowReceipt] = useState(false);

  // 🧠 Load saved data from localStorage
  useEffect(() => {
    const savedData = localStorage.getItem("checkoutInfo");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  // 💾 Save data to localStorage whenever formData changes
  useEffect(() => {
    localStorage.setItem("checkoutInfo", JSON.stringify(formData));
  }, [formData]);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = [
      "name",
      "email",
      "mobile",
      "houseNo",
      "village",
      "district",
      "state",
      "pincode",
    ];

    const missingField = requiredFields.find((field) => !formData[field].trim());
    if (missingField) {
      alert("⚠️ Please fill in all the details before proceeding!");
      return;
    }

    const mockReceipt = {
      ...formData,
      total,
      timestamp: new Date().toLocaleString(),
    };

    setReceipt(mockReceipt);
    setShowReceipt(true);
    setOpen(true);
    clearCart();
  };

  return (
    <Box maxWidth="900px" mx="auto" mt={4} mb={6}>
      <Typography variant="h4" gutterBottom fontWeight={600}>
        Checkout
      </Typography>

      <Paper sx={{ p: 3, mb: 3, borderRadius: 3, boxShadow: 4 }}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h6" gutterBottom>
            Contact Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mobile Number"
                name="mobile"
                type="tel"
                fullWidth
                value={formData.mobile}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>
            Delivery Address
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="House No. / Building Name"
                name="houseNo"
                fullWidth
                value={formData.houseNo}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Village / Locality"
                name="village"
                fullWidth
                value={formData.village}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="District"
                name="district"
                fullWidth
                value={formData.district}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="State"
                name="state"
                fullWidth
                value={formData.state}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Pincode"
                name="pincode"
                type="number"
                fullWidth
                value={formData.pincode}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6">
            Total: ₹{total.toLocaleString()}
          </Typography>

          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{
              mt: 3,
              py: 1.2,
              fontSize: "1rem",
              borderRadius: 2,
              fontWeight: 600,
            }}
            type="submit"
            disabled={cart.length === 0}
          >
            Confirm & Checkout
          </Button>
        </form>
      </Paper>

      {/* Receipt Display */}
    {/* ✅ Receipt Modal */}
<Dialog
  open={showReceipt}
  onClose={() => setShowReceipt(false)}
  maxWidth="sm"
  fullWidth
>
  <DialogTitle sx={{ fontWeight: 600 }}>🧾 Order Confirmed!</DialogTitle>
  <DialogContent dividers>
    {receipt && (
      <Box>
        <Typography variant="subtitle1">
          <strong>Name:</strong> {receipt.name}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Email:</strong> {receipt.email}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Mobile:</strong> {receipt.mobile}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Address:</strong> {receipt.houseNo}, {receipt.village},{" "}
          {receipt.district}, {receipt.state} - {receipt.pincode}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Total Paid:</strong> ₹{receipt.total.toLocaleString()}
        </Typography>
        <Typography variant="subtitle1">
          <strong>Date:</strong> {receipt.timestamp}
        </Typography>
      </Box>
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setShowReceipt(false)} variant="contained">
      Close
    </Button>
  </DialogActions>
</Dialog>


      <Snackbar
        open={open}
        autoHideDuration={2500}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Checkout successful! 🎉
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Checkout;
