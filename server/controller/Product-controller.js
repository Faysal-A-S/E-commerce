import Product from "../model/product-schema.js";

export const products = async (req, res) => {
  try {
    const fetchedProducts = await Product.find({});

    res.status(200).json({ fetchedProducts });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};
export const product = async (req, res) => {
  try {
    const id = req.params.id;
    const singleProduct = await Product.findOne({ _id: id });
    res.status(200).json(singleProduct);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
