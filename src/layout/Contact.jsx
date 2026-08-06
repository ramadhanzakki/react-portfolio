import { SocialMediaList } from "../data";

const Contact = () => {
    return (
        <div>
            <div>
                <h3 className="text-base font-normal uppercase px-3 py-1 text-shadow-cozy-bg bg-brand-cinnamon max-w-fit rounded-lg mb-2">
                    COLLABORATION
                </h3>
                <h2 className="text-2xl/snug font-semibold text-cozy-text w-2/3">
                    Have a vision?
                </h2>
                <p className="text-base/loose font-normal text-cozy-muted w-4/5">
                    Open to new ventures and creative opportunities. Let’s craft something
                    brilliant together.
                </p>
                <button>Connect Now</button>
            </div>
            <div>
                <h3 className="text-base font-normal uppercase px-3 py-1 text-shadow-cozy-bg bg-brand-cinnamon max-w-fit rounded-lg mb-2">
                    follow me
                </h3>
                <div>
                    {SocialMediaList.map((social, index) => {
                        const Icon = social.icon;

                        return (
                        <a
                            href={social.link}
                            key={index}
                            target="_blank"
                            rel="noreferrer"
                            className="text-cozy-text hover:text-brand-amber transition ease-linear duration-75 inline-flex items-center justify-center p-2"
                        >
                            <Icon />
                        </a>
                        );
                    })}
                </div>
                <div>
                    <a href="mailto:ramadhanzakki506@gmail.com">
                        <svg role="img" width={40} className="fill-brand-cinnamon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                        <p>ramadhanzakki506@gmail.com</p>
                    </a>
                </div>
                <div>
                    <a href="tel:+6288229926821">
                        <svg xmlns="http://www.w3.org/2000/svg" width={40} className="fill-brand-cinnamon" viewBox="0 0 512 512"><path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/></svg>
                        <p>+62 882 2992 6821</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
