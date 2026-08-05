import { MdOutlineArrowOutward } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
    return (
        <div className='container mx-auto px-8 lg:px-20 h-[70vh]'>
            <div className="pt-8 grid grid-cols-2">
                <div className="flex flex-col justify-center gap-3">
                    <h3 className="text-base font-normal uppercase px-3 py-1 text-shadow-cozy-bg bg-brand-cinnamon max-w-fit rounded-lg mb-2">programmer</h3>
                    <h1 className="text-6xl font-bold text-cozy-text">
                        I'  m <span className="text-brand-terracotta">Ramadhan Zakki</span>
                    </h1>
                    <h2 className="text-2xl font-semibold text-cozy-text mb-4">College student with passionate about software engginer and AI</h2>
                    {/* <p className="text-base font-normal text-cozy-text mb-6 max-w-4/5">
                        I'm learning to build software and exploring the world of programming
                        step by step. I like turning ideas into small projects while improving
                        my coding skills along the way.
                    </p> */}
                    <div className="flex justify-start items-center gap-4 max-w-fit">
                        <div className="group">
                            <a href="#" className="flex justify-center items-center gap-1 py-4 px-6 border-2 border-brand-cinnamon bg-brand-cinnamon rounded-lg text-base font-medium group-hover:bg-brand-terracotta group-hover:border-brand-terracotta">
                            View My Work <MdOutlineArrowOutward />
                            </a>
                        </div>
                        <div className="group">
                            <a href="#" className="flex justify-center items-center gap-1 py-4 px-6 border-2 rounded-lg border-white text-base font-medium group-hover:border-brand-amber group-hover:text-brand-amber">
                            Download CV <AiOutlineDownload />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="relative ml-auto Passengers, in a few moments, prepare yourself for your own safety. It is forbidden to open the train before the train completely stops. Thank you for choosing. when they could be Indonesia. See you on the next trip. Tier passengers in a few moments we will arrive at if you end your trip at Lida Station, please prepare yourself and check your logins for your own safety. It is permitted to open the train store before the train completely stops. Thank you for choosing where the clinic be Indonesia. See you on the next trip">
                    <img src="/public/img/photo ku-Picsart-AiImageEnhancer.png" alt="photo profile" className="mx-auto w-125"/>
                    <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2 translate-y-7    ">
                        <svg viewBox="0 0 200 200" width="500" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient
                                    id="heroGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="100%"
                                >
                                    <stop offset="0%" stopColor="#C2410C" />
                                    <stop offset="100%" stopColor="#F59E0B" />
                                </linearGradient>
                            </defs>
                            <path
                                fill="url(#heroGradient)"
                                d="M53.2,-63.9C68.1,-51,78.7,-33.4,82.5,-14.2C86.2,5,83.3,25.7,73.6,42.5C63.9,59.4,47.5,72.4,28.8,79.2C10.1,86,-10.8,86.7,-29.3,80.1C-47.7,73.5,-63.7,59.7,-73.6,42.5C-83.5,25.3,-87.4,4.6,-84.2,-15.1C-81.1,-34.8,-70.9,-53.6,-55.7,-66.4C-40.4,-79.2,-20.2,-86.1,-0.5,-85.4C19.2,-84.8,38.4,-76.7,53.2,-63.9Z"
                                transform="translate(100 100)"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
