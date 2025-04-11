'use client';

import { Search, ShoppingCart, User, MapPin, Menu } from 'lucide-react';
import Link from 'next/link';
import { useState, useEffect } from "react";

export default function Navbar() {
  const [visibleItems, setVisibleItems] = useState([]);
  const [hiddenItems, setHiddenItems] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    // const updateMenu = () => {
    //   if (window.innerWidth < 640) {
    //     setVisibleItems(menuItems.slice(0, 2)); // Small screen: Sirf 2 items dikhaye
    //     setHiddenItems(menuItems.slice(2));
    //   } else if (window.innerWidth < 768) {
    //     setVisibleItems(menuItems.slice(0, 4)); // MD screen: Sirf 4 items dikhaye
    //     setHiddenItems(menuItems.slice(4));
    //   } else {
    //     setVisibleItems(menuItems.slice(0, 7)); // Large screen: Pehle 7 items
    //     setHiddenItems(menuItems.slice(7));
    //   }
    // };
    const updateMenu = () => {
      const containerWidth = document.getElementById("nav-container")?.offsetWidth || window.innerWidth; // Container width
      const itemWidth = 120; // Approx width of each menu item (adjust as needed)
      const maxItems = Math.floor(containerWidth / itemWidth); // Auto calculate how many items fit

      setVisibleItems(menuItems.slice(0, maxItems));
      setHiddenItems(menuItems.slice(maxItems));
    };

    updateMenu();
    window.addEventListener("resize", updateMenu);
    return () => window.removeEventListener("resize", updateMenu);
  }, []);

  const menuItems = [
    { name: "Dairy & Breakfast", path: "/dairy-breakfast" },
    { name: "Cold Drinks & Juices", path: "/cold-drinks" },
    { name: "Tea & Coffee", path: "/tea-coffee" },
    { name: "Bakery & Biscuits", path: "/bakery" },
    { name: "Beauty & Cosmetics", path: "/beauty" },
    { name: "Baby Care", path: "/baby-care" },
    { name: "Dry Fruits", path: "/dry-fruits" },
    { name: "Masala & Oils", path: "/masala-oils" },
    { name: "Atta, Rice & Dal", path: "/atta-rice" },
    { name: "Sooji", path: "/atta-rice" }
  ];

  return (
    <header className="fixed bg-[var(--color-primary-dark)] text-white w-full z-50 shadow-[0px_4px_10px_rgba(255,255,255,0.4)]">
      {/* Top Header */}
      <div className="max-w-6xl mx-auto flex flex-row md:flex-row items-center justify-between px-6 py-2 gap-4">
        {/* Logo and Location */}
        <div className="flex items-center space-x-3">
          <div className="bg-[var(--color-primary)] p-2 rounded-full">
            <span className="text-lg font-bold">🛍️</span>
          </div>
          <h1 className="text-xl font-bold">Surevih</h1>
        </div>
        {/* Search Bar */}
        <div className="flex bg-[var(--color-primary)] items-center w-1/2 relative rounded-full px-3">
          <Search className=" text-white w-5 h-5 " />
          <input
            type="text"
            placeholder="Search JioMart"
            className="w-full px-4 py-2 ml-2 border-none outline-none text-white placeholder-white"
          />

        </div>
        {/* Icons */}
        <div className="flex items-center space-x-6">
          <Link href="/checkout/cart" >
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
          </Link>

          <div className="flex items-center cursor-pointer">
            <User className="w-5 h-5 mr-2" />
            <span>Sign In</span>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      {/* <div className="bg-[var(--color-primary)]">
        <nav className="max-w-6xl flex flex-wrap mx-auto text-white py-2 gap-2 text-sm font-medium">
          {menuItems.map((item, index)=>(
            <NavButton key={index} href={item.path}>
              {item.name}
            </NavButton>
          ))}
        </nav>
      </div> */}
      <div className="bg-[var(--color-primary)]">
        <nav className="max-w-6xl flex flex-nowrap mx-auto text-white py-2 gap-2 text-sm font-medium pr-4 h-14 ">
          {visibleItems.map((item, index) => (
            <NavButton key={index} href={item.path}>
              {item.name}
            </NavButton>
          ))}

          {/* More Dropdown */}
          {hiddenItems.length > 0 && (
            <div className="relative">
              <button onClick={() => setShowDropdown(!showDropdown)} className="h-full w-[130] px-2 py-1 text-base rounded bg-[var(--color-primary-dark)] leading-tight md:text-sm md:px-2 md:py-1 max-[760px]:text-xs" >
                All Category ▼
              </button>
              {showDropdown && (
                <div className="absolute mt-2 bg-gray-800 shadow-lg rounded w-40">
                  {hiddenItems.map((item, index) => (
                    <NavButton key={index} href={item.path}>
                      {item.name}
                    </NavButton>
                  ))}
                </div>
              )}
            </div>
          )}
        </nav>

      </div>

    </header>
  );
}

const NavButton = ({ href, children }) => (
  <Link href={href} className="relative inline-flex px-2 py-2 rounded transition text-center text-xs sm:text-sm md:text-base items-center justify-center leading-none
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 
      after:h-[3px] after:bg-white after:transition-all after:duration-300 hover:after:w-full">
    {children}
  </Link>
);