import { FaCode } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="py-7 flex items-center justify-between">
            <div className="logo flex items-center justify-start gap-1 ">
                <FaCode className="text-3xl text-cozy-text"/>
                <h3>Portfolio</h3>
            </div>
            <ul className="menu">
                <li>
                    <a href="#home">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#skill">Skills</a>
                </li>
                <li>
                    <a href="#project">Project</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
