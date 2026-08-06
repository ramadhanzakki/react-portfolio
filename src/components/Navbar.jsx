import { useState } from "react";
import { FaCode } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import ResponsiveNavbar from "./ResponsiveNavbar";

const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <div className='container mx-auto px-8 lg:px-20'>
            <div className="py-7">
                <nav className="flex items-center justify-between">
                    
                    {/* Logo */}
                    <div className="logo flex items-center justify-start gap-1 ">
                        <FaCode className="text-3xl text-brand-amber"/>
                        <h3 className="text-3xl font-semibold text-cozy-text">Portfolio</h3>
                    </div>

                    {/* Desktop Menu */}
                    <div>
                        <ul className="md:flex items-center gap-3 hidden">
                            <li className="group">
                                <a href="#home" className="text-base lg:text-lg font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">Home</a>
                            </li>
                            <li className="group">
                                <a href="#about" className="text-base lg:text-lg font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">About</a>
                            </li>
                            <li className="group">
                                <a href="#skill" className="text-base lg:text-lg font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">Skills</a>
                            </li>
                            <li className="group">
                                <a href="#project" className="text-base lg:text-lg font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">Project</a>
                            </li>
                            <li className="group">
                                <a href="#contact" className="text-base lg:text-lg font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">Contact</a>
                            </li>
                        </ul>

                        <div className="block md:hidden text-4xl" onClick={() => setOpen(!open)}>
                            <FiMenu />
                        </div>

                        {/* Mobile hamburger Menu */}
                        <div>
                            <ResponsiveNavbar open={open} />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
