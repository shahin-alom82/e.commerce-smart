
export const getData = async () => {
      const res = await fetch("http://localhost:3000/api/product");
      return res.json()
}

export const productCart = async () => {
      const res = await fetch("https://fakestoreapiserver.reactbd.com/smart");
      return res.json();
}