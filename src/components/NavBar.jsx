import { useState } from "react";
import { FaBars } from "react-icons/fa6";



const NavBar = ()=>{
    const [visibleNav, setVisibleNav] = useState(true)

    return(
        <div className={`flex-1  justify-end items-center pl-10 max-xsm:flex max-xsm:justify-end `}>
            <FaBars className={`cursor-pointer text-white text-2xl hover:text-yellow-500 duration-200 xsm:hidden`} onClick={()=>setVisibleNav((prev)=>!prev)} />    
            <ul className={`flex items-center justify-end gap-5 ${visibleNav ? "visible" : "hidden"} max-sm:gap-3 max-xsm:absolute max-xsm:top-full max-xsm:left-0 max-xsm:bg-blue-500 max-xsm:bg-opacity-85 max-xsm:w-full max-xsm:flex-col max-xsm:items-start max-xsm:p-4`}>
                <li>
                    <a className={`text-white text-xl max-sm:text-sm hover:text-yellow-400 duration-200`} href="#">Home</a>
                </li>
                <li>
                    <a className={`text-white text-xl max-sm:text-sm hover:text-yellow-400 duration-200`} href="#services">Services</a>
                </li>
                <li>
                    <a className={`text-white text-xl max-sm:text-sm hover:text-yellow-400 duration-200`} href="#about">About</a>
                </li>
                <li>
                    <a className={`text-white text-xl max-sm:text-sm hover:text-yellow-400 duration-200 text-nowrap`} href="#contact-us">Contact Us</a>
                </li>
            </ul>
        </div>
    )
}
export default NavBar;