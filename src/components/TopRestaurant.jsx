import React, { useEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import Card from './Card';

export default function TopRestaurant(){
  const [data,setData]= useState([]);

  const fetchTopRestaurant = async () => {
    const response = await fetch('image link');
    const apiData = await response.json();
    setData(apiData);
  }

  useEffect(
    () => {
      fetchTopRestaurant();
    },[]
  )
    return(
      <div className="max-w-[1200px] mx-auto px-2 ">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[25px] font-bold">Top restaurant chains in Nalanda</div>
        <div className="flex ">
          <div
           
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointer hover:text-[#16a085]"
          >
            <FaLongArrowAltLeft />
          </div>
          <div
            
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 cursor-pointe hover:text-[#16a085]"
          >
            <FaLongArrowAltRight />
          </div>
        </div>
      </div>
      <div className='flex gap-5 overflow-hidden'>
        {
          data.map(
            (d,i)=>{
              return <Card width="w-full md:w-[273px]" {...d} key={i}/>
            }
          )
        }
        
      </div>
      <Card/>
      
      <hr className="my-2 border-[1px]"/>
      </div>
    )
}