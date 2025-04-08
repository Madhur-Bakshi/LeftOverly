import React from 'react'

const Steps = () => {
    const steps = [
        "Add your leftover ingredients",
        "We'll find matching meal recipes",
        "Cook and enjoy your meal!"
    ];
  return (
    <div className="mt-6 px-4 text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl mt-3 font-semibold text-neutral-800 py-5 md:py-12">
        How it Works
      </h2>
      <div className="flex flex-col md:flex-col justify-around gap-4 md:gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-4 max-w-md w-full mx-auto"
          >
            <div className="text-green-600 font-bold text-xl mb-2">
              Step {idx + 1}
            </div>
            <p className="text-gray-700">{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Steps