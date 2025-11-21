import React from "react";

export default function Footer() {
  return (
    <footer className="bg-base-200 text-base-content py-10 px-5 md:px-20">
      <div className="grid grid-cols-2 items-start">
        {/* Brand (Left) */}
        <div className="justify-self-start">
          <h2 className="text-2xl font-bold mb-2">Blend Fashion</h2>
          <p className="text-sm text-gray-600">
            Bringing you the best products with style and comfort.
          </p>
        </div>

        {/* Contact (Right) */}
        <div className="justify-self-end text-right">
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-sm text-gray-600">Bangalore, IN</p>
          <p className="text-sm text-gray-600">Email: mohammednabeelkk.tkl@gmail.com</p>
          <p className="text-sm text-gray-600">Phone: +91 80892 22453</p>
          <div className="flex justify-end space-x-3 mt-3">
            <a href="#" className="hover:text-primary transition-colors">🌐</a>
            <a href="#" className="hover:text-primary transition-colors">🐦</a>
            <a href="#" className="hover:text-primary transition-colors">📘</a>
            <a href="#" className="hover:text-primary transition-colors">📸</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Blend Fashion. All rights reserved.
      </div>
    </footer>
  );
}
