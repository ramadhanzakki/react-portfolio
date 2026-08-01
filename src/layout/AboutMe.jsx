import { IoCodeSlashSharp } from "react-icons/io5";
import { PiRankingFill } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { RiTargetFill } from "react-icons/ri";

const AboutMe = () => {
    return (
        <div className="py-32 grid grid-cols-2">

            {/* Career */}
            <div className="grid grid-cols-2 grid-rows-2 gap-8">
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

            {/* Desc */}
            <div>
                <h3 className="text-base font-normal uppercase px-3 py-1 text-shadow-cozy-bg bg-brand-cinnamon max-w-fit rounded-lg mb-2">About Me</h3>
                <h2>First-year Computer Science student from Indonesia</h2>
                <p>I'm learning to build software and exploring the world of programming step by step. I like turning ideas into small projects while improving my coding skills along the way.</p>
            </div>
        </div>
    )
}

export default AboutMe