import React, { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

export default function Category() {
  const [slide, setSlide] = useState(0);
  const [categories, setCategory] = useState([]);

  const fetchCategory = async () => {
    try {
      const response = await fetch("/categories.json");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setCategory(data);
    } catch (error) {
      console.error("Error fetching the categories:", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const handlePrev = () => {
    setSlide((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSlide((prev) => Math.min(prev + 1, categories.length - 1));
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">What's On Your Mind?</div>
        <div className="flex">
          <div
            onClick={handlePrev}
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
          >
            <FaLongArrowAltLeft />
          </div>
          <div
            onClick={handleNext}
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer"
          >
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
      <div className="flex border border-red-600 overflow-hidden">
        <div
          style={{ transform: `translateX(-${slide * 150}px)` }}
          className="flex duration-500"
        >
          {categories.map((cat, index) => (
            <div key={cat.path} className="w-[150px] shrink-0">
              <img
                src={`/images/${cat.image}`}
                alt={cat.path}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
