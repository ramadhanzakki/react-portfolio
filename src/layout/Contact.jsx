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
            </div>
        </div>
    );
};

export default Contact;
