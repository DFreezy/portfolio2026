import React from "react";

export default function Profession() {
  return (
   <div className="bg-black text-white">
   <h1 className="font-bold text-3xl md:text-5xl mb-10">What I Do</h1>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="text-gray-300">Building responsive and dynamic websites using React, Node.js, and other modern technologies.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
            <p className="text-gray-300">Creating intuitive and visually appealing user interfaces with a focus on user experience.</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Mobile App Development</h2>
            <p className="text-gray-300">Developing cross-platform mobile applications using React Native and Flutter.</p>
        </div>
    </div>
   </div>
  )
}