import { SocialMediaList } from "../data";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 md:px-12 lg:px-20 bg-cozy-bg">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Column */}
                <div className="flex flex-col justify-center items-start gap-5">
                    <h3 className="text-brand-amber font-semibold tracking-wider text-sm uppercase">
                        Let's Work Together
                    </h3>
                    <h2 className="text-4xl md:text-5xl font-bold text-cozy-text leading-tight">
                        Have a project in mind?
                    </h2>
                    <p className="text-base font-normal text-cozy-muted leading-relaxed max-w-md">
                        I'm always open to discussing new projects and opportunities. Let's create something amazing together!
                    </p>
                    <a href="mailto:ramadhanzakki506@gmail.com" className="mt-2 bg-brand-cinnamon hover:bg-brand-terracotta text-cozy-text px-6 py-3 rounded-xl font-medium flex items-center gap-2 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-brand-cinnamon/20">
                        Get In Touch 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                    </a>
                </div>

                {/* Right Column */}
                <div className="flex flex-col justify-center items-start gap-8 lg:pl-16">
                    <div className="w-full">
                        <h3 className="text-brand-amber font-semibold tracking-wider text-sm uppercase mb-4">
                            Follow Me
                        </h3>
                        <div className="flex gap-4">
                            {SocialMediaList.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                <a
                                    href={social.link}
                                    key={index}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-cozy-card border border-cozy-border text-cozy-text hover:text-brand-amber hover:border-brand-amber hover:bg-cozy-bg transition-all duration-300 inline-flex items-center justify-center p-3 rounded-xl shadow-sm"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                                );
                            })}
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-5 w-full">
                        <a href="mailto:ramadhanzakki506@gmail.com" className="flex items-center gap-4 text-cozy-muted hover:text-brand-amber transition-colors group">
                            <div className="bg-cozy-card p-3 rounded-xl border border-cozy-border group-hover:border-brand-amber/50 transition-colors">
                                <svg role="img" width={20} height={20} className="fill-brand-cinnamon group-hover:fill-brand-amber transition-colors" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Gmail</title><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                            </div>
                            <span className="text-sm md:text-base break-all">ramadhanzakki506@gmail.com</span>
                        </a>
                        <a href="tel:+6288229926821" className="flex items-center gap-4 text-cozy-muted hover:text-brand-amber transition-colors group">
                            <div className="bg-cozy-card p-3 rounded-xl border border-cozy-border group-hover:border-brand-amber/50 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} className="fill-brand-cinnamon group-hover:fill-brand-amber transition-colors" viewBox="0 0 512 512"><path d="M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"/></svg>
                            </div>
                            <span className="text-sm md:text-base">+62 882 2992 6821</span>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Contact;
