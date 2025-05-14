import React from "react";
import { motion } from "framer-motion";

const Description = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-yellow-50 via-green-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:col-span-2 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-green-700">
            What is LeftOverly?
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            LeftOverly helps you turn your fridge chaos into culinary
            creativity. No more wasting food – just enter what you have, and
            we’ll suggest recipes you can make instantly!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Description;
