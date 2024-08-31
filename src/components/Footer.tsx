import { logo, payment } from "@/images";
import Image from "next/image";
import Container from "./Container";
import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";


const Footer = () => {
      return (
            <div className="bg-[#242424] text-white mt-10">
                  <Container className="">
                        <footer className="bg-darkText text-lightTexts py-8 flex flex-wrap justify-between border-b">


                              <nav className="mb-4 md:mb-0">
                                    <h6 className="text-4xl font-medium mb-2 uppercase text-green-600">Smart</h6>
                                    <ul className="mt-4 space-y-2" >
                                          <li><a href="#" className="link link-hover block mb-1">Dhanmondi, Dhaka, Bangladesh</a></li>
                                          <li><a href="#" className="link link-hover block mb-1">+45657565676</a>
                                          </li>

                                    </ul>
                              </nav>



                              <nav className="mb-4 md:mb-0">
                                    <h6 className="text-xl font-medium mb-2">Services</h6>
                                    <ul className="mt-4 space-y-2" >
                                          <li><a href="#" className="link link-hover block mb-1">Branding</a></li>
                                          <li><a href="#" className="link link-hover block mb-1">Design</a></li>
                                          <li><a href="#" className="link link-hover block mb-1">Marketing</a></li>
                                          <li><a href="#" className="link link-hover block">Advertisement</a></li>
                                    </ul>
                              </nav>
                              <nav className="mb-4 md:mb-0">
                                    <h6 className="text-xl font-medium mb-2">Company</h6>
                                    <ul className="mt-4 space-y-2">
                                          <li><a href="#" className="link link-hover block mb-1">About us</a></li>
                                          <li><a href="#" className="link link-hover block mb-1">Contact</a></li>
                                          <li><a href="#" className="link link-hover block mb-1">Jobs</a></li>
                                          <li><a href="#" className="link link-hover block">Press kit</a></li>
                                    </ul>
                              </nav>
                              <nav>
                                    <h6 className="text-xl font-medium mb-2">Legal</h6>
                                    <ul className="mt-4 space-y-2">
                                          <li><a href="#" className="link link-hover block mb-1">Terms of use</a></li>
                                          <li><a href="#" className="link link-hover block mb-1">Privacy policy</a></li>
                                          <li><a href="#" className="link link-hover block">Cookie policy</a></li>
                                    </ul>
                              </nav>
                        </footer>

                 
                        <footer className="flex flex-wrap justify-between items-center py-4">
                              <div className="flex items-center gap-4">
                                    <span className="border border-gray-500 py-2 px-2 rounded hover:bg-orange-600 hover:border hover:border-orange-600 hover:text-white duration-300 cursor-pointer"><FaFacebookSquare size={20} /></span>
                                    <span className="border border-gray-500 py-2 px-2 rounded hover:bg-orange-600 hover:border hover:border-orange-600 hover:text-white duration-300 cursor-pointer"><BsGithub size={20} /></span>
                                    <span className="border border-gray-500 py-2 px-2 rounded hover:bg-orange-600 hover:border hover:border-orange-600 hover:text-white duration-300 cursor-pointer"><GrInstagram size={20} /></span>
                                    <span className="border border-gray-500 py-2 px-2 rounded hover:bg-orange-600 hover:border hover:border-orange-600 hover:text-white duration-300 cursor-pointer"><FaLinkedin size={20} /></span>
                                    <span className="border border-gray-500 py-2 px-2 rounded hover:bg-orange-600 hover:border hover:border-orange-600 hover:text-white duration-300 cursor-pointer"><BsTwitterX size={20} /></span>
                              </div>
                              <div className="flex flex-col gap-3">
                                    <h1 className="lg:text-[18px] text-xs lg:mt-0 mt-6 text-start">Pay us with your trusted services</h1>
                                    <Image src={payment} alt="Payment methods" className="mt-2 lg:h-8 w-72" />
                              </div>
                        </footer>
                  </Container>
            </div>
      );
};

export default Footer;
