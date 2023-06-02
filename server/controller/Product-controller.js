import Product from "../model/product-schema.js";

export const products = async (req, res) => {
  try {
    const fetchedProducts = await Product.find({});
    console.log(fetchedProducts);
    res.status(200).json({ fetchedProducts });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
