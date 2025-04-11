import Link from "next/link";

export default function Footer() {
  const headingStyle = {
    color: 'black',
    fontSize: '16px',
  };

  return (
    <footer className="bg-orange-100 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-4">

          {/* All Categories */}
          <div>
            <h3 className="font-semibold mb-4" style={headingStyle}>All Categories</h3>
            <ul className="space-y-2">
              <li><Link href="#">Grocery</Link></li>
              <li><Link href="#">Electronics</Link></li>
              <li><Link href="#">Fashion</Link></li>
              <li><Link href="#">Home & Lifestyle</Link></li>
              <li><Link href="#">Premium Fruits</Link></li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="font-semibold mb-4" style={headingStyle}>Popular Categories</h3>
            <ul className="space-y-2">
              <li><Link href="#">Biscuits, Drinks & Packaged Foods</Link></li>
              <li><Link href="#">Fruits & Vegetables</Link></li>
              <li><Link href="#">Cooking Essentials</Link></li>
              <li><Link href="#">Dairy & Bakery</Link></li>
            </ul>
          </div>

          {/* Customer Account */}
          <div>
            <h3 className="font-semibold mb-4" style={headingStyle}>Customer Account</h3>
            <ul className="space-y-2">
              <li><Link href="#">My Account</Link></li>
              <li><Link href="#">My Orders</Link></li>
              <li><Link href="#">Wishlist</Link></li>
              <li><Link href="#">Delivery Addresses</Link></li>
              <li><Link href="#">JioMart Wallet</Link></li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="font-semibold mb-4" style={headingStyle}>Help & Support</h3>
            <ul className="space-y-2">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="#">FAQ</Link></li>
              <li><Link href="#">Terms & Conditions</Link></li>
              <li><Link href="#">Privacy Policy</Link></li>
              <li><Link href="#">E-waste Policy</Link></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-2">
            <h1 className="font-bold mb-4">Contact Us</h1>
            <ul className="space-y-2">
              <li>WhatsApp Us: <span className="font-semibold">8423641097</span></li>
              <li>Call Us: <span className="font-semibold">+91 8423641097</span></li>
              <li>6:00 AM to 9:00 PM, <span className="font-semibold">365 days</span></li>
              <br />
              <li>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the website.</li>
            </ul>
            <h1 className="font-extrabold text-xl pt-4" >Download the app</h1>
            
            <button className="bg-[var(--color-primary-dark)] hover:bg-[var(--color-primary-hover)] text-white py-2 px-6 mt-2 rounded-lg">
            Explore Now
          </button>

          </div>

        </div>

        <div className="flex justify-between mt-20" >
            <div>@ 2025 All rights reserved.</div>
            <div>Best viewed on Microsoft Edge 81+ , Mozilla Firefox+ , Google Chrome 80+</div>
        </div>

      </div>
    </footer>
  );
}