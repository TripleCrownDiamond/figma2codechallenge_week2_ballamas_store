"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center items-center h-auto">
      <div className="w-full flex flex-row h-[48px] bg-dark justify-center items-center">
        <p className="text-white font-archivo font-normal text-xs md:text-sm tracking-tighter">
          Sign Up and get 20% off for all new arrivals collections
        </p>
      </div>
      <div className="flex flex-row justify-between items-center w-full h-[78px] px-[20px] md:px-[46px] lg:px-[120px]">
        <div className="hidden lg:flex">
          <ul className="flex flex-row justify-start items-center gap-[18px]">
            <li>
              <Link href="#men" className="nav-link">
                Men
              </Link>
            </li>
            <li>
              <Link href="#women" className="nav-link">
                Women
              </Link>
            </li>
            <li>
              <Link href="#kids" className="nav-link">
                Kids
              </Link>
            </li>
            <li>
              <Link href="#collections" className="nav-link">
                Collections
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden">
          <Image
            src={menuOpened ? "/cancel_icon.svg" : "/hambuger-menu_icon.svg"}
            alt="Hamberger Menu Icon"
            width={42}
            height={24}
            onClick={() => setMenuOpened(!menuOpened)}
          />
        </div>
        <div>
          <Link href="/">
            <p className="font-chillax font-semibold text-3xl text-white text-outline-dark">
              BALLAMAS
            </p>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex flex-row justify-start items-center gap-[18px]">
            <li>
              <Link href="#shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#about_us" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#account" className="nav-link flex items-center">
                <Image
                  className="mr-[6px]"
                  src="/user_icon.svg"
                  alt="User Icon"
                  width={18}
                  height={18}
                />
                Account
              </Link>
            </li>
            <li>
              <Link href="#cart" className="nav-link">
                Cart(0)
              </Link>
            </li>
            <li>
              <Image
                src="/search_icon.svg"
                alt="Search Icon"
                width={20}
                height={20}
              />
            </li>
          </ul>
        </div>
        <div className="flex lg:hidden flex-row gap-[12px]">
          <Image
            src="/search_icon.svg"
            alt="Hamberger Menu Icon"
            width={20}
            height={20}
          />
          <Image
            src="/cart_icon.svg"
            alt="Hamberger Menu Icon"
            width={20}
            height={20}
          />
        </div>
      </div>
      {menuOpened && (
        <div className="w-full h-[794px] flex lg:hidden flex-col justify-start items-center">
          <ul className="flex flex-col justify-start items-center gap-[18px]  mt-[26px]">
            <li>
              <Link href="#men" className="nav-link">
                Men
              </Link>
            </li>
            <li>
              <Link href="#women" className="nav-link">
                Women
              </Link>
            </li>
            <li>
              <Link href="#kids" className="nav-link">
                Kids
              </Link>
            </li>
            <li>
              <Link href="#collections" className="nav-link">
                Collections
              </Link>
            </li>
            <li>
              <Link href="#shop" className="nav-link">
                Shop
              </Link>
            </li>
            <li>
              <Link href="#about_us" className="nav-link">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#account" className="nav-link flex items-center">
                <Image
                  className="mr-[6px]"
                  src="/user_icon.svg"
                  alt="User Icon"
                  width={18}
                  height={18}
                />
                Account
              </Link>
            </li>
            <li className="mt-[30px]">
                <Link href="#faq" className="nav-link">
                    FAQ
                </Link>
            </li>
            <li>
            <Link href="#contact_us" className="nav-link">
                    Contact Us
                </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavBar;
