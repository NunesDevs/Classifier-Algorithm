import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const [sorting, setSorting] = useState(false);

  useEffect(() => {
    resetArray();
  }, []);

  const resetArray = () => {
    if (sorting) return;
    const newArray = Array.from({ length: 20 }, () => Math.floor(Math.random() * 100));
    setArray(newArray);
  };

  const bubbleSort = async () => {
    setSorting(true);
    let arr = [...array];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          setArray([...arr]);
          await new Promise((resolve) => setTimeout(resolve, 100));
        }
      }
    }
    setSorting(false);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex space-x-4 mb-4">
        <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={resetArray} disabled={sorting}>
          Reset
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={bubbleSort} disabled={sorting}>
          Bubble Sort
        </button>
      </div>
      <div className="flex space-x-1">
        {array.map((value, idx) => (
          <motion.div
            key={idx}
            className="w-6 bg-blue-500"
            style={{ height: `${value * 3}px` }}
            animate={{ height: `${value * 3}px` }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
};

export default SortingVisualizer;
