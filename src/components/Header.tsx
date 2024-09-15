"use client"
import { BsCartDash } from "react-icons/bs";
import Image from "next/image";
import { logo } from "@/images";
import { SlUser } from "react-icons/sl";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Container from "./Container";
import { CiDeliveryTruck } from "react-icons/ci";
import { useSelector } from "react-redux";
import PriceFormate from "@/constants/PriceFormate";

const Header = () => {
      const [clos, setClose] = useState("")
      const { data: session } = useSession()
      // @ts-ignore
      const selector = useSelector((state) => state.shopping.productCart)
      const [amount, setAmout] = useState(0)

      useEffect(() => {
            let amt = 0;
            // @ts-ignore
            selector.map((item) => {
                  amt += item.price * item.quantity
                  return
            })
            setAmout(amt)
      }, [selector])

      return (
            <div className="sticky top-0 z-50 bg-white">
                  {/* To Header Start */}
                  <div className='bg-green-700'>
                        <Container className='flex justify-between items-center py-1'>
                              <h1 className='flex text-white gap-2 items-center'>
                                    <CiDeliveryTruck className='text-[#ffb342]  cursor-pointer' size={25} />
                                    <p className="text-[14px]">FREE Express Shipping On Orders $570+</p>
                              </h1>
                              <ul className='flex items-center gap-4 text-white'>
                                    <li className='menu-icon-style text-[14px]'>
                                          English
                                          <IoIosArrowDown />
                                    </li>
                                    <li className='menu-icon-style text-[14px]'>
                                          USD
                                          <IoIosArrowDown />
                                    </li>
                                    <li className='menu-icon-style text-[14px]'>
                                          Settig
                                          <IoIosArrowDown />
                                    </li>

                              </ul>
                        </Container>
                  </div>

                  {/* To Header End */}

                  <div className="px-4 lg:px-6">

                        <div className="flex flex-col lg:flex-row md:flex-row  items-center justify-between gap-4">
                              <Link href={"/"}>
                                    <Image className="h-20 w-36 lg:h-24 lg:w-40" src={logo} alt="logo" />
                              </Link>

                              <div className="relative flex-1 w-full lg:max-w-[900px]">
                                    <input
                                          value={clos}
                                          onChange={(e) => setClose(e.target.value)}

                                          className="w-full border border-gray-400 py-2 rounded-full pl-10 pr-10 outline-none focus-visible:border-green-600 placeholder:text-[14px] text-[14px] text-gray-700"
                                          type="text"
                                          placeholder="Enter your product..."
                                    />
                                    <IoIosSearch size={20} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-500" />
                                    {
                                          clos && (
                                                <VscClose onClick={() => setClose("")} size={20} className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500 cursor-pointer hover:text-red-600 duration-300" />
                                          )
                                    }
                              </div>
                              <div className="flex gap-10">

                                    {session?.user ?
                                          <>
                                                <div className="flex items-center gap-4 cursor-pointer">
                                                      <span className="rounded-full">
                                                            <Image className="lg:w-10 lg:h-10 h-5 w-5 rounded-full" src={session?.user.image!} height={200} width={200} alt="userImage" />
                                                      </span>

                                                      <div className="">
                                                            <h1 className="lg:text-[16px] text-sm text-gray-700">Hello, <span>{session?.user?.name}</span> </h1>
                                                            <h1 onClick={() => signOut()} className="lg:text-[16px] text-green-600  text-sm">Sign Out</h1>
                                                      </div>
                                                </div>
                                          </>
                                          :
                                          <>
                                                <div onClick={() => signIn()} className="flex items-center gap-2 cursor-pointer">
                                                      <span className="border border-gray-400 text-gray-500 py-2 px-2 rounded-full"><SlUser size={22} /></span>

                                                      <div className="">
                                                            <h1 className="text-[16px] text-gray-700">Hello, Guest</h1>
                                                            <h1 className="text-[16px] text-gray-700 font-medium">Login / Register</h1>
                                                      </div>
                                                </div></>
                                    }

                                    <Link href={"/cart"}>
                                          <div className="relative flex items-center gap-2 bg-black text-white px-2 lg:px-4 rounded-full cursor-pointer lg:h-10 lg:py-1">
                                                <BsCartDash size={20} />
                                                <span className="text-sm"><PriceFormate className="text-white" amount={amount} /></span>
                                          </div>

                                          <span className="absolute top-[140px]  lg:top-[47px] right-6 border text-xs border-green-500 bg-white text-green-500 px-[6px] py-[2px] rounded-full">
                                                <p>{selector.length > 0 ? selector.length : "0"}</p>
                                          </span>
                                    </Link>

                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default Header;
