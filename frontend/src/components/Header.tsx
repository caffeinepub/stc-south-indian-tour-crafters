import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919876543210';
const PHONE_NUMBER = '+919876543210';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Destinations', href: '#destinations' },
    { label: 'Packages', href: '#packages' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
                    scrolled ? 'shadow-lg' : 'shadow-sm'
                }`}
            >
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    <div className='flex items-center justify-between h-16 md:h-20'>
                        {/* Logo */}
                        <a
                            href='#home'
                            onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                            className='flex items-center gap-2 flex-shrink-0'
                        >
                            <img
                                src='/assets/generated/stc-logo.dim_400x120.png'
                                alt='STC – Southindian Tour Crafters'
                                className='h-10 md:h-12 w-auto object-contain'
                            />
                        </a>

                        {/* Desktop Nav */}
                        <nav className='hidden md:flex items-center gap-1'>
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                    className='text-stc-green hover:text-stc-green-dark font-medium px-4 py-2 rounded-full hover:bg-stc-green/10 transition-all duration-200 text-sm'
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>

                        {/* Desktop CTA Buttons */}
                        <div className='hidden md:flex items-center gap-2'>
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className='flex items-center gap-1.5 text-stc-green hover:text-stc-green-dark text-sm font-medium px-3 py-2 rounded-full hover:bg-stc-green/10 transition-all'
                            >
                                <Phone size={15} />
                                <span>Call</span>
                            </a>
                            <a
                                href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20STC%2C%20I%27m%20interested%20in%20a%20Kerala%20tour%20package.`}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='flex items-center gap-1.5 bg-stc-orange text-white text-sm font-semibold px-4 py-2 rounded-full btn-shadow-orange hover:bg-stc-orange-dark transition-all'
                            >
                                <MessageCircle size={15} />
                                <span>WhatsApp</span>
                            </a>
                        </div>

                        {/* Mobile Hamburger */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className='md:hidden text-stc-green p-2 rounded-lg hover:bg-stc-green/10 transition-all'
                            aria-label='Toggle menu'
                        >
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Slide-in Drawer */}
            <div
                className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
                    menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
                {/* Backdrop */}
                <div
                    className='absolute inset-0 bg-black/50 backdrop-blur-sm'
                    onClick={() => setMenuOpen(false)}
                />
                {/* Drawer */}
                <div
                    className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
                        menuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className='flex items-center justify-between p-5 border-b border-stc-green/20'>
                        <img
                            src='/assets/generated/stc-logo.dim_400x120.png'
                            alt='STC – Southindian Tour Crafters'
                            className='h-9 w-auto object-contain'
                        />
                        <button
                            onClick={() => setMenuOpen(false)}
                            className='text-stc-green p-1.5 rounded-lg hover:bg-stc-green/10'
                        >
                            <X size={22} />
                        </button>
                    </div>
                    <nav className='p-5 flex flex-col gap-1'>
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                className='text-stc-green font-medium px-4 py-3 rounded-xl hover:bg-stc-green/10 transition-all text-base'
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                    <div className='p-5 flex flex-col gap-3 border-t border-stc-green/20 mt-2'>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi%20STC%2C%20I%27m%20interested%20in%20a%20Kerala%20tour%20package.`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center gap-2 bg-stc-orange text-white font-semibold py-3 rounded-xl btn-shadow-orange'
                        >
                            <MessageCircle size={18} />
                            WhatsApp Us
                        </a>
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className='flex items-center justify-center gap-2 bg-stc-green/10 text-stc-green font-semibold py-3 rounded-xl border border-stc-green/30'
                        >
                            <Phone size={18} />
                            Call Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
