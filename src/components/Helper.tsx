import { productData } from "@/constants/data";

export const getData = async () => {
      const res = await fetch("http://localhost:3000/api/product");
      return res.json()
}

export const productCart = async () => {
      const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
      return res.json();
}

// Single Cart
export const getTraningProducts = async () => {
      const res = await fetch("https://fakestoreapiserver.reactbd.com/smarttrending");
      return res.json();
};

// Single Cart
export const singleProduct = (_id: number) => {
      const item = productData.find((product) => product._id === _id)
      return item
}

