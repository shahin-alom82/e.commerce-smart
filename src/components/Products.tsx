"use client"

import Image from "next/image";
import Container from "./Container";
import { productCart } from "./Helper";
import { IoIosStar } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/smartSlice";
import toast from "react-hot-toast";

const Products = async () => {
      const dispatch = await useDispatch()
      const cart = await productCart();
      return (
            <Container className="mt-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cart.map((item: any) => {
                              const discount = Math.round(((item.oldPrice - item.price) / item.oldPrice) * 100);
                              return (
                                    <div key={item._id}>
                                          <div className="relative h-80 w-full overflow-hidden rounded-t-md">
                                                <Image
                                                      className="object-cover w-full h-full transform transition-transform duration-500 hover:scale-105"
                                                      src={item.image}
                                                      alt="Product Image"
                                                      height={500}
                                                      width={500}
                                                />
                                                <span className="absolute top-3 right-3 bg-orange-400 text-white px-2 py-1 rounded text-xs">
                                                      <span>{discount}</span>% off
                                                </span>
                                          </div>

                                          <div className="border-b-2 border-r-2 border-l-2 border-orange-200 px-2 rounded-b-md">
                                                <h1 className="py-3 text-[16px] text-gray-600">{item?.title}</h1>

                                                <div className="flex items-center justify-between">
                                                      <button className="border border-orange-400 text-xs rounded-full py-1 px-2 text-gray-600">
                                                            <span>{discount}%</span> off
                                                      </button>
                                                      <p className="text-gray-600 text-xs">
                                                            <span className="line-through lg:mr-4 text-[16px]">${item?.oldPrice}.00</span><span className="text-[16px]">${item?.price}</span>
                                                      </p>
                                                </div>

                                                <div className="flex items-center justify-between mt-4 mb-4">
                                                      <button onClick={() => dispatch(addToCart(item))} className="bg-orange-400 text-white text-xs rounded-full py-2 px-4">
                                                            Add To Cart
                                                      </button>
                                                      <div className="flex items-center mt-2">
                                                            {Array.from({ length: item.rating }, (_, index) => (
                                                                  <span key={index} className="text-orange-400">
                                                                        <IoIosStar size={20} />
                                                                  </span>
                                                            ))}
                                                      </div>
                                                </div>
                                          </div>

                                    </div>
                              )
                        })}
                  </div>
            </Container>
      );
};

export default Products;
