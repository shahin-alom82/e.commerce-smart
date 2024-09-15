import { useSelector } from "react-redux";
import Container from "../Container";
import { useEffect, useState } from "react";
import PriceFormate from "@/constants/PriceFormate";

const CartSummary = () => {
      // @ts-ignore
      const selector = useSelector((state) => state.shopping.productCart)
      const [amount, setAmount] = useState(0);

      useEffect(() => {
            let amt = 0;
            // @ts-ignore
            selector.map((item) => {
                  amt += item.price * item.quantity;
                  return;
            });
            setAmount(amt);
      }, [selector]);
      return (
            <div>
                  <Container className="">
                        <div className="border-2 border-orange-400 bg-yellow-100 px-4 py-2 sm:gap-6 h-48 lg:col-span-5 mt-4 lg:mt-0 text-2xl">
                              <h2 className="text-2xl font-medium text-gray-800">
                                    Order summary
                              </h2>
                              <div className="mt-2">
                                    <div className="flex items-center justify-between mt-6">
                                          <p className="text-[16px] font-medium text-gray-900">
                                                Payable total
                                          </p>
                                          <p className="text-sm font-medium text-gray-900"><PriceFormate className=" text-xl text-green-500 font-medium" amount={amount} /></p>
                                    </div>
                                    <div className="mt-10">
                                          <button className="w-full ">
                                                <p className="px-6 py-0.5 text-green-700 rounded-full bg-orange-400 text-[16px]">
                                                      Payment
                                                </p>
                                          </button>
                                    </div>

                              </div>

                        </div>
                  </Container>
            </div>
      );
};

export default CartSummary;