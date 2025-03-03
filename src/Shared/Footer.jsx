import React from 'react';

const Footer = () => {
    return (
        <div className="px-6 text-white">
            <footer className="footer footer-center text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Abir Hossen</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;