import { MdOutlineArrowOutward } from "react-icons/md";
import { AiOutlineDownload } from "react-icons/ai";

const Hero = () => {
    return (
        <div>
            <div>
                <h3>programmer</h3>
                <h1>
                    I'am <span>Ramadhan Zakki</span>
                </h1>
                <h2>First-year Computer Science student from Indonesia 🇮🇩.</h2>
                <p>
                    I'm learning to build software and exploring the world of programming
                    step by step. I like turning ideas into small projects while improving
                    my coding skills along the way.
                </p>
                <div>
                    <div>
                        <a href="#">
                        View My Work <MdOutlineArrowOutward />
                        </a>
                    </div>
                    <div>
                        <a href="#">
                        Download CV <AiOutlineDownload />
                        </a>
                    </div>
                </div>
            </div>
        <div>
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
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
            
        </div>
        </div>
    );
};

export default Hero;
