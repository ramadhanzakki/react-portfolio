import { IoCodeSlashSharp } from "react-icons/io5";
import { PiRankingFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { RiTargetFill } from "react-icons/ri";

const AboutMe = () => {
    return (
        <div id="about" className='bg-cozy-card'>
            <div className="container mx-auto px-8 lg:px-20 py-16 mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-6 lg:gap-10">

                {/* Desc */}
                <div className="w-full flex flex-col gap-3 md:gap-1.5 justify-center">
                    <h3 className="text-brand-amber font-semibold tracking-wider text-lg uppercase">About Me</h3>
                    <h2 className="text-xl md:text-2xl/snug font-semibold text-cozy-text w-full lg:w-2/3">First-year Computer Science student from Indonesia</h2>
                    <p className="text-sm md:text-base/loose font-normal text-cozy-muted w-full lg:w-4/5">I'm learning to build software and exploring the world of programming step by step. I like turning ideas into small projects while improving my coding skills along the way.</p>
                </div>

                {/* Career */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 w-full">
                    <div className="w-full flex justify-start items-center gap-3">
                        <div className="text-4xl bg-brand-cinnamon p-3 rounded-lg">
                            <IoCodeSlashSharp />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-medium text-cozy-text">3</h2>
                            <p className="text-base font-normal text-cozy-muted">Project Complete</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-3">
                        <div className="text-4xl bg-brand-amber p-3 rounded-lg">
                            <PiRankingFill />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-medium text-cozy-text">3.56</h2>
                            <p className="text-base font-normal text-cozy-muted">GPA</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-3">
                        <div className="text-4xl bg-brand-amber p-3 rounded-lg">
                            <FaUsers />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-medium text-cozy-text">1</h2>
                            <p className="text-base font-normal text-cozy-muted">happy Client</p>
                        </div>
                    </div>
                    <div className="w-full flex justify-start items-center gap-3">
                        <div className="text-4xl bg-brand-cinnamon p-3 rounded-lg">
                            <RiTargetFill />
                        </div>
                        <div className="flex flex-col">
                            <h2 className="text-2xl font-medium text-cozy-text">5</h2>
                            <p className="text-base font-normal text-cozy-muted">Project Target on The Year</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AboutMe