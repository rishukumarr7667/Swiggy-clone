import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
//mport { MdSettingsInputComponent } from "react-icons/md";
export default function OnlineDelivery() {
  const [data, setData] = useState([]);
  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const Rect = componentRef.current.getBoundingClientReact();
        setIsAtTop(React.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchTopRestaurant = async () => {
    const response = await fetch("image link");
    const apiData = await response.json();
    setData(apiData);
  };

  useEffect(() => {
    fetchTopRestaurant();
  }, []);
  return (
    <div className='max-w-[1200px] mx-auto px-2' ref={componentRef}>
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Nalanda
        </div>
      </div>
      <div className={isAtTop ? 'fixed top-0 z-[9999] bg-white w-0 left-0' : ''}>
        <div className="max-w-[1200] mx-auto flex my-4 gap-3 border border-red-500">
          <div className="p-3 rounded-md shadow">Filter</div>
          <div className="p-3 rounded-md shadow">Sort By</div>
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-col-4 gap-3'>
        {data.map((d, i) => {
          return <card {...d} />;
        })}
      </div>
    </div>
  );
}
