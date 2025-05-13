// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-center text-gray-600 py-6 mt-12">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold text-green-600">LeftOverly</span>. Made
      with 💚
    </footer>
  );
}
