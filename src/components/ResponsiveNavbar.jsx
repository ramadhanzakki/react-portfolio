import { motion, AnimatePresence } from "motion/react"


const ResponsiveNavbar = ({open, setOpen}) => {
    return (
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -100}}
                        className="absolute top-20 left-0 w-full h-screen z-20"
                    >
                        <div className="text-xl uppercase font-semibold bg-brand-amber text-cozy-text py-10 m-6 rounded-xl">
                            <ul className="flex flex-col justify-center items-center gap-5">
                                <li className="hover:text-white transition-colors" onClick={() => setOpen(false)}><a href="#home">Home</a></li>
                                <li className="hover:text-white transition-colors" onClick={() => setOpen(false)}><a href="#about">About</a></li>
                                <li className="hover:text-white transition-colors" onClick={() => setOpen(false)}><a href="#skill">Skills</a></li>
                                <li className="hover:text-white transition-colors" onClick={() => setOpen(false)}><a href="#project">Project</a></li>
                                <li className="hover:text-white transition-colors" onClick={() => setOpen(false)}><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default ResponsiveNavbar