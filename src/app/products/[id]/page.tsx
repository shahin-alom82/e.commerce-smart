import Container from "@/components/Container";
import { getTraningProducts, singleProduct } from "@/components/Helper";
import PriceFormate from "@/constants/PriceFormate";
import Image from "next/image";
import { BsCart2 } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";

// Async function for fetching single product and trending products
const SingleProductPage = async ({ params }: any) => {
      const _id = Number(params.id);
      const product = await singleProduct(_id);
      const data = await getTraningProducts();

      return (
            <div className="mt-6">
                  <Container className="">
                        {/* Single Product Section */}
                        <div className="flex flex-col lg:flex-row justify-between py-4 border-2 border-gray-300">
                              {/* Product Image */}
                              <div className="lg:w-2/6 px-4">
                                    <Image
                                          className="lg:w-80 lg:h-72 w-full h-48 rounded"
                                          src={product?.image || "/placeholder.jpg"}
                                          alt="Product Image"
                                          height={200}
                                          width={200}
                                    />
                              </div>

                              {/* Product Info */}
                              <div className="w-5/6 mt-2 lg:px-0 px-4">
                                    <div className="flex lg:items-center gap-5">
                                          <h1 className="lg:text-3xl text-[16px] font-medium text-gray-700 tracking-wide">
                                                {product?.title}
                                          </h1>
                                          <h1 className="lg:text-2xl text-[16px] font-medium text-gray-700 tracking-wide lg:ml-96">
                                                ${product?.price}.00
                                          </h1>
                                    </div>
                                    <h1 className="mt-4 lg:w-[600px] text-gray-800">{product?.description}</h1>
                                    <h1 className="mt-2 text-gray-800">Category: {product?.category}</h1>

                                    {/* Product Rating */}
                                    <div className="flex items-center mt-1">
                                          {Array.from({ length: product?.rating || 0 }, (_, index) => (
                                                <span key={index} className="text-orange-400">
                                                      <IoIosStar size={20} />
                                                </span>
                                          ))}
                                    </div>

                                    {/* Pricing Section */}
                                    <div className="flex items-center gap-10 mt-1">
                                          <h1 className="line-through">${product?.oldPrice}.00</h1>
                                          <PriceFormate className="font-medium" amount={product?.price!} />
                                    </div>

                                    {/* Add to Cart Button */}
                                    <div className="mt-4 flex items-center">
                                          <button className="bg-orange-400 text-white font-medium flex gap-3 px-4 py-2">
                                                <h1>Add To Cart</h1>
                                          </button>
                                          <span className="border-l border-white bg-orange-400 text-white py-[10px] px-2">
                                                <BsCart2 size={20} />
                                          </span>
                                    </div>
                              </div>
                        </div>

                        {/* Trending Products Section */}
                        <div>
                              <h1 className="mt-6 lg:text-3xl text-xl text-gray-700 tracking-wide">Trending Products</h1>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                                    {data.map((item: any) => (
                                          <div key={item._id} className="bg-red-300 py-2 px-2 rounded">
                                                <Image
                                                      className="w-full h-64 rounded"
                                                      src={item?.image || "/placeholder.jpg"}
                                                      alt="Trending Product"
                                                      height={200}
                                                      width={200}
                                                />
                                                {/* Add more product details if needed */}
                                          </div>
                                    ))}
                              </div>
                        </div>
                  </Container>
            </div>
      );
};

export default SingleProductPage;
