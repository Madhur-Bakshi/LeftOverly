import React from "react";

const Description = () => {
  return (
    <section className=" py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* You can ignore the image on the left based on your instruction */}

        <div className="md:col-span-2 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What is LeftOverly?
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            LeftOverly helps you turn your fridge chaos into culinary creativity. 
            No more wasting food – just enter what you have, and we’ll suggest recipes 
            you can make instantly!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
