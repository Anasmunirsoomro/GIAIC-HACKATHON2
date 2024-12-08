"use client";
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa';
import Link from "next/link";
import { BsBag } from "react-icons/bs";
import Mobile from "./Mobile";
import { useContext, useEffect, useState } from "react";
import SideCart from "./SideCart";
import { Context } from "@/Context/Context";
import axios from "axios";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/api/category");
      setCategories(res?.data?.data);
    };
    fetchCategories();
  }, []);
  return (
    <div className="w-full relative">
      <header className="bg-yellow-100">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li
                  className="relative"
                  onMouseEnter={() => setIsHovered(true)}
                >
                  <Link
                    href={"/Shop"}
                    className="text-gray-800 transition hover:text-gray-800/75 cursor-pointer "
                  >
                    Shop
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-800 transition hover:text-gray-800/75 "
                    href="/products"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-800 transition hover:text-gray-800/75 "
                    href="/about"
                  >
                    About
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-800 transition hover:text-gray-800/75 "
                    href="/contact"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-12">
                <FaSearch />
                <FaHeart />
                <FaShoppingCart />
            </div>
          </div>
        </div>
      </header>
      {isOpen && (
        <div
          className={`absolute left-0 top-0 w-52 md:hidden bg-white shadow-lg rounded-lg z-50`}
        >
          <Mobile setIsOpen={setIsOpen} categories={categories} />
        </div>
      )}
      {isCartOpen && (
        <SideCart setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />
      )}
    </div>
  );
};

export default Header;
