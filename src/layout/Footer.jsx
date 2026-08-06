const Footer = () => {
    return (
        <footer className="bg-cozy-bg py-8 border-t border-cozy-border/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
                <p className="text-sm text-cozy-muted text-center md:text-left">
                    &copy; {new Date().getFullYear()} Ramadhan Zakki. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
