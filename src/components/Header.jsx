import React, { useState } from 'react';
import { RxCaretDown } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { LiaSignInAltSolid } from "react-icons/lia";
import { IoCartSharp } from "react-icons/io5";

export default function Header(){
    const[toggle,setToggle] = useState(false);

    const showSideMenu = () =>{
        setToggle(true);
    }
        const hideSideMenu = () =>{
            setToggle(false);
        }
        const link = [
            {
                icon:<CiSearch />,
                name:"Search"
            },
            {
                icon:<CiDiscount1 />,
                name:"Offer",
                sup:"New"
            },
            {
                icon:<IoMdHelpCircleOutline />,
                name:"Help"
            },
            {
                icon:<LiaSignInAltSolid />,
                name:"Signin"
            },
            {
                icon:<IoCartSharp />,
                name:"Cart"
            },
        ]
    
    return (
        <>

          <div className='black-overlay w-full h-full fixed duration-500' onClick={hideSideMenu} style={{
            opacity:toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden"
        }}>
            <div onClick={(e) => {
                e.stopPropagation();
            }} className='w-[500px] bg-white h-full absolute duration-[400ms]'
            style={{
                left: toggle ? "0%" :"-100%"
            }}
            ></div>

        </div>
       <header className='p-4 shadow-xl text-[#3d4152]'>
        <div className='max-w-[4500px] mx-auto  flex items-center '>
            <div className='w-[100px] '>
                <img src = '/logo.png' className='w-full' alt="" />
            </div>
            <div className=''>
                <spam className='hover:text-[#1971c2] font-bold border-b-[3px] border-[black] r'>Nalanda</spam>,Bihar,
                India < RxCaretDown   fontSize={25} className='font inline  text-[#1971c2] r cursor-pointer 'onClick={showSideMenu} />
            </div>
            <nav className='flex list-none gap-4 ml-auto font-semibold text-[18px]'>
                {
                    link.map(
                        (link, index) => {
                            return <li key={index} className=' cursor-pointer flex hover:text-[#2ecc71] items-center gap-2'>
                                {link.icon}
                                {link.name}
                               <sup>{link.sup}</sup>
                            </li>
                        }
                    )
                }
            </nav>
        </div>
       </header>
       </>
    )
}