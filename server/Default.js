import { products } from "./constants/data.js";
import Product from "./model/product-schema.js";
const Default = async () => {
  try {
    await Product.insertMany(products);
    console.log("data inserted successfully");
  } catch (err) {
    console.log("err");
  }
};

export default Default;
