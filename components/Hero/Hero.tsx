"use client";

import React from "react";
import Image from "next/image";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content flex flex-col justify-center items-center">
          <div className="flex flex-row justify-center items-center">
            <div className="w-[66px] h-[0.5px] bg-white mr-[12px]"></div>
            <p className="font-archivo font-normal text-custom-10 text-center leading-custom-12 md:text-sm text-white">
              We bring new fashion to the world
            </p>
            <div className="w-[66px] h-[0.5px] bg-white ml-[12px]"></div>
          </div>
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="font-chillax font-bold text-white text-3xl md:text-custom-42 md:leading-custom-44 text-center mt-[18px]">
              DISCOVER THE LATEST FASHION TRENDS HERE
            </h1>
            <p className="font-archivo font-normal text-white text-sm md:text-base text-center mt-[16px]">
              Discover a world of fashion with our meticulously curated outfits.
              Shop now to update your wardrobe with chic stylish outfits.
            </p>
            <div className="flex flex-row w-auto h-auto mt-[42px]">
              <button className="bg-white text-dark px-[18px] md:px-[20px] py-[10px] md:py-[12px] rounded-[100px] font-archivo font-semibold text-base">
                Start Shopping
              </button>
              <button className="px-[12px] md:px-[14px] py-[10px] md:py-[12px] bg-white rounded-[100px]">
                <Image src="/arrow.svg" alt="Arrow" width={20} height={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[60px]">
        <h1 className="font-chillax font-semibold text-center text-xl md:text-3xl">
          Discover the latest trends in summer fashion. Shop now and refresh your wardrobe with our stylish summer shirts.
        </h1>
      </div>
    </>
  );
};

export default Hero;
