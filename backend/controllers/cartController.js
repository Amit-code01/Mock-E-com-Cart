let cart = [];

export const addToCart = (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json(cart);
};

export const getCart = (req, res) => {
  res.json(cart);
};

export const removeFromCart = (req, res) => {
  const { id } = req.params;
  cart = cart.filter(item => item.id !== parseInt(id));
  res.json(cart);
};
