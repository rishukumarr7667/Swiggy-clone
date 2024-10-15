import React, { useEffect, useRef, useState } from "react";
import Card from "./Card"; // Make sure the path is correct

export default function OnlineDelivery() {
  const [data, setData] = useState([]);
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchTopRestaurant = async () => {
    try {
      const response = await fetch("/restaurantChains.json"); // Adjust the path if needed
      const apiData = await response.json();
      setData(apiData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-2" ref={componentRef}>
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Nalanda
        </div>
      </div>
      <div
        className={isAtTop ? "fixed top-0 z-[9999] bg-white w-full left-0" : ""}
      >
        <div className="max-w-[1200px] mx-auto flex my-4 gap-3 border border-red-500">
          <div className="p-3 rounded-md shadow">Filter</div>
          <div className="p-3 rounded-md shadow">Sort By</div>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {data.map((d, i) => (
          <Card key={i} {...d} />
        ))}
      </div>
    </div>
  );
}
