"use client"
import { useDispatch } from "react-redux";
import Container from "../Container";
import Link from "next/link";
import Image from "next/image";
import PriceFormate from "@/constants/PriceFormate";
import { IoClose } from "react-icons/io5";
import { addToCart, cartDelete, decrease, increase } from "@/redux/smartSlice";
import toast from "react-hot-toast";
import { BsCart2 } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";

const CartProduct = ({ product }: any) => {
      const dispatch = useDispatch();

      const handleDelete = () => {
            dispatch(cartDelete(product?._id));
            toast.success(`${product?.title.substring(0, 10)} deleted successfully!`);
      };

      //@ts-ignore
      const handlePlus = (_id) => {
            dispatch(increase(_id));
            toast.success("Quantity increased successfully!");
      };

      //@ts-ignore
      const handleMinus = (_id, quantity) => {
            if (quantity > 1) {
                  dispatch(decrease(_id));
                  toast.success("Quantity decreased successfully!");
            } else {
                  toast.error("Minimum quantity reached");
            }
      };

      return (
            <Container className="flex flex-col lg:flex-row md:flex gap-4 border-b-2 border-gray-300 relative">
                  {/* Product Image start */}
                  <div className="lg:flex flex items-center justify-center">
                        <Link className="" href={{ pathname: `/products/${product._id}`, query: { _id: product._id } }}>
                              <Image className="lg:h-48 lg:w-48 w-full lg:border-r-2 lg:mt-0 mt-4 border-gray-300 cursor-pointer" src={product?.image} alt="cartImage" height={200} width={200} />
                        </Link>
                  </div>
                  {/* Product Image end */}
                  
                  {/* List section start */}
                  <div>
                        <div>
                              <h1 className="mt-2 text-xl text-gray-800 font-medium ">{product?.title}</h1>
                              <h1 className="text-gray-700 mt-1 text-sm">Category: {product?.category}</h1>
                              <h1 className="text-xs lg:w-[460px] mt-1">{product.description}</h1>
                        </div>

                        <div className="flex gap-6 items-center text-start font-medium">
                              <PriceFormate className="mt-2 text-green-600" amount={product?.price * product?.quantity} />
                        </div>

                        <div className="mt-2 flex gap-4 items-center">
                              <div className="flex items-center">
                                    <button className="bg-orange-400 text-white font-medium text-xs gap-3 px-2 py-[5px]" >
                                          <h1>Add To Cart</h1>
                                    </button>
                                    <span className="border-l border-white bg-orange-400 text-white py-[5.5px] px-2">
                                          <BsCart2 size={15} />
                                    </span>
                              </div>

                              <div className="flex items-center gap-6">
                                    <span onClick={() => handleMinus(product._id, product.quantity)} className="bg-gray-300 rounded-full p-1 px-1 text-gray-700">
                                          <FiMinus size={15} className="cursor-pointer" />
                                    </span>
                                    <span>{product.quantity}</span>
                                    <span onClick={() => handlePlus(product._id)} className="bg-gray-300 rounded-full p-1 px-1 text-gray-700">
                                          <FiPlus size={15} className="cursor-pointer" />
                                    </span>
                              </div>
                        </div>
                  </div>
                  {/* List section end */}
                  
                  <button onClick={handleDelete}>
                        <IoClose size={20} className="absolute lg:right-4 lg:top-4 top-8 right-8 text-gray-700 hover:text-red-500 cursor-pointer duration-300" />
                  </button>
            </Container>
      );
};

export default CartProduct;
