import { FaCode } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className="py-7 flex items-center justify-between">
            <div className="logo flex items-center justify-start gap-1 ">
                <FaCode className="text-3xl text-brand-amber"/>
                <h3 className="text-3xl font-semibold text-cozy-text">Portfolio</h3>
            </div>
            <ul className="menu flex items-center gap-3">
                <li className="group">
                    <a href="#home" className="text-base font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">Home</a>
                </li>
                <li className="group">
                    <a href="#about" className="text-base font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">About</a>
                </li>
                <li className="group">
                    <a href="#skill" className="text-base font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">Skills</a>
                </li>
                <li className="group">
                    <a href="#project" className="text-base font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">Project</a>
                </li>
                <li className="group">
                    <a href="#contact" className="text-base font-medium block transition-transform ease-in-out group-hover:-translate-y-1/5 active:text-brand-amber">Contact</a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
