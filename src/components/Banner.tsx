"use client";

import { banner1, banner2, banner3 } from "@/images";
import Image from "next/image";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define the type for Arrow props
interface ArrowProps {
  onClick?: () => void;
}

const PrevArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronLeft />
  </div>
);

const NextArrow = ({ onClick }: ArrowProps) => (
  <div
    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-2xl cursor-pointer z-10"
    onClick={onClick}
  >
    <FaChevronRight />
  </div>
);

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // 3 seconds per slide
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="relative lg:mt-0 mt-5">
      <Slider {...settings}>
        {[banner1, banner2, banner3].map((image, index) => (
          <div key={index} className="relative">
            <div className="relative lg:w-full lg:h-[600px] md:h-60 md:w-80 h-36">
              <Image
                src={image}
                alt={`banner ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-start p-4 md:p-6 lg:p-8 text-white bg-gradient-to-t from-black via-transparent to-transparent">
              <div className="lg:ml-14">
                <h1 className="text-xl md:text-2xl lg:text-6xl xl:text-7xl font-bold mb-3 hidden sm:block">
                  Outware picks
                </h1>
                <p className="text-xs md:text-sm lg:text-base xl:text-lg font-medium mt-4 hidden sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum <br /> voluptate consequuntur, odio facilis
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 hidden sm:flex mt-6">
                  <button className="px-6 py-3 bg-slate-300 rounded-full hover:bg-white hover:text-black transition duration-300">
                    FIND OUT MORE
                  </button>
                  <button className="px-6 py-3 bg-slate-300 rounded-full hover:text-black hover:bg-white transition duration-300">
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
