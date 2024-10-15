import React, { useEffect, useState } from "react";
import Card from "./Card"; // Adjust the path if necessary

export default function TopRestaurant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("/restaurantChains.json");
        const data = await response.json();
        setRestaurants(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRestaurants();
  }, []);

  return (
    <div className="flex flex-wrap">
      {restaurants.map((restaurant, index) => (
        <Card
          key={index}
          width="w-full md:w-1/3 p-4" 
          image={restaurant.image}
          offer={restaurant.offer}
          title={restaurant.title}
          rating={restaurant.rating}
          minTime={restaurant.minTime}
          maxTime={restaurant.maxTime}
          name={restaurant.name}
          place={restaurant.place}
        />
      ))}
    </div>
  );
}
