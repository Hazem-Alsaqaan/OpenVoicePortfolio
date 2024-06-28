import Logo from "./Logo"
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <div className={`bg-slate-900`}>
                <div className={`w-full py-10 container mx-auto px-4  min-h-[500px] bg-slate-900 grid grid-cols-2  max-sm:grid-cols-1`}>
                    <div className={`col-span-1 flex justify-center items-center`}>
                        <div>
                            <Logo />
                            <h6 className="text-slate-500 text-xs my-8 text-center">Making the world a better place through constructing elegant hierarchies.</h6>
                            <div className="flex items-center justify-center p-3 gap-5 bg-slate-950">
                                <a href="https://www.linkedin.com/in/hazem-alsaqaan-53b498174/"  target="_blank"> <FaLinkedin className="text-slate-400 hover:text-white cursor-pointer duration-100  text-2xl" /> </a>
                                <a href="https://github.com/Hazem-Alsaqaan"  target="_blank">   <FaGithub className="text-slate-400 hover:text-white cursor-pointer duration-100 text-2xl" /> </a>
                                <a href="https://www.instagram.com/hazem.alsaqaan/" target="_blank"><BsInstagram className="text-slate-400 hover:text-white cursor-pointer duration-100 text-2xl" /> </a>
                            </div>
                        </div>
                    </div>
                    <div className={` col-span-1 py-5  flex justify-center items-center gap-10`}>
                        <ul className={` grid grid-rows-1 gap-8`}>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">Solutions</li>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">Marketing</li>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">Analytics</li>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">Commerce</li>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">Insights</li>
                        </ul>
                        <ul className={` grid grid-rows-1 gap-8`}>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">Support</li>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">Pricing</li>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">Documentation</li>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">Guides</li>
                            <li className="text-slate-300 cursor-pointer hover:text-white duration-100">API Status</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer