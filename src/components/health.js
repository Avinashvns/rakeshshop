
"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cart/cartSlice";

export default function HealthNutrition() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const router = useRouter();

  const dispatch = useDispatch();

  const handleNavigation = () => {
    router.push("/about"); // ✅ Click karte hi About page open hoga
  };

  // Scroll Handlers
  const scrollLeftHandler = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRightHandler = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  // Mouse Drag Scroll Handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    setIsHovered(false); // Hide arrows when mouse leaves
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Products Data
  const products = [
    { id: 1, name: "Gritzo SuperMilk Height+ (7-12y Gir..", price: "₹699.00", image: "/images/amul-logo-02.png" },
    { id: 2, name: "Zoi Grey Lumbar Sacral Belt Posture..", price: "₹296.00", oldPrice: "₹999.00", image: "/images/amul.png" },
    { id: 3, name: "Brightcrop Himalayan Red Rice | Him..", price: "₹199.00", image: "/images/amul-logo-02.png" },
    { id: 4, name: "Nutrabay Pure Micronised Creatine M..", price: "₹299.00", oldPrice: "₹499.00", image: "/images/amul.png" },
    { id: 5, name: "Gritzo SuperMilk Overall Growth (7-..", price: "₹699.00", image: "/images/amul-logo-02.png" },
    { id: 6, name: "MyFitFuel MFF 100% Whey Protein 1 K..", price: "₹1,499.00", oldPrice: "₹2,299.00", image: "/images/amul.png" },
  ];

  return (
    <div className="bg-[var(--color-primary-light)] py-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex justify-between items-center ms-10">
          <h2 className="text-xl font-bold">Health & Nutrition</h2>
          <Link href="#" className="text-sm text-blue-600 font-semibold">View All</Link>
        </div>

        {/* Product Scrollable Section */}
        <div
          className="relative mt-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Scroll Button (Hidden by default, shown on hover) */}
          {isHovered && (
            <button className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 p-1.2 bg-[var(--color-primary-dark)] text-white" onClick={scrollLeftHandler}>
              <ChevronLeft />
            </button>
          )}

          {/* ✅ Scrollable Product Grid (Mouse Drag Enabled) */}
          <div
            ref={scrollRef}
            className="flex space-x-4 overflow-x-auto scroll-smooth px-10 scrollbar-hidden cursor-pointer select-none"
            style={{
              scrollBehavior: "smooth",
              whiteSpace: "nowrap",
              overflow: "hidden",
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {products.map((product) => (
              <Link href="/about" key={product.id} className="block">
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-md min-w-[200px] inline-block"
                // onClick={handleNavigation} 
                >
                  <div className="relative w-full h-40 flex items-center justify-center">
                    <Image src={product.image} alt={product.name} width={100} height={100} objectFit="contain" />
                  </div>
                  <p className="mt-2 text-sm font-semibold whitespace-normal">{product.name}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-bold text-gray-900">{product.price}</span>
                    {product.oldPrice && <span className="text-sm text-gray-500 line-through">{product.oldPrice}</span>}
                  </div>

                  <Link
                    href="/cart"
                    onClick={(e) => {
                      e.preventDefault();             // ✅ Stop default link jump
                      dispatch(addToCart(product));   // ✅ Add to cart
                      router.push("/checkout/cart");           // ✅ Manually redirect
                    }}
                    className="block"
                  >
                    <button
                      className="w-full mt-3 bg-[var(--color-primary-dark)] text-white py-1 rounded-lg border border-transparent hover:border-white"
                    >
                      Add
                    </button>
                  </Link>
                </div>
              </Link>

            ))}
          </div>

          {/* Right Scroll Button (Hidden by default, shown on hover) */}
          {isHovered && (
            <button className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-1.2 bg-[var(--color-primary-dark)] text-white" onClick={scrollRightHandler}>
              <ChevronRight />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

