import React from "react";

export default function Footer() {
  return (
    <footer className="bg-green-50 text-center text-green-800 py-6 mt-12 border-t">
      © {new Date().getFullYear()}{" "}
      <span className="font-semibold">LeftOverly</span>. Made with 💚
    </footer>
  );
}
